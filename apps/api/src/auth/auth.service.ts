import {
  Injectable,
  ForbiddenException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthSignInDTO, AuthSignupDTO } from './dto/auth.dto';
import { ROLE } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Tokens } from './types';
import { Response } from 'express';
import { KycDTO } from './dto/kyc.dto';
import { PasswordResetDTO, ResetPasswordDTO } from './dto/password.dto';
import { MailService } from 'src/mail/mail.service';
import { ChangeRoleDTO } from './dto/change-role.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async signUp(dto: AuthSignupDTO, role: ROLE) {
    if (dto.confirmPassword !== dto.password) {
      throw new ForbiddenException('Password didnot match');
    }
    try {
      const hash = await this.hashData(dto.password);
      const newUser = await this.prisma.user.create({
        data: {
          name: dto.firstName + ' ' + dto.lastName,
          email: dto.email,
          mobileNumber: dto.mobileNumber,
          password: hash,
          role,
        },
      });
      const tokens = await this.signToken(
        newUser.id,
        newUser.email,
        newUser.role,
      );
      await this.updateRtHash(newUser.id, tokens.refresh_token);
      return tokens;
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new ForbiddenException('User already exists');
      }
    }
  }

  async signin(dto: AuthSignInDTO, response: Response): Promise<Tokens> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) throw new ForbiddenException('User not found');
    if (user.disabled_by_admin)
      throw new ForbiddenException('User not allowed');
    const passwordMatches = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatches)
      throw new ForbiddenException("Username and Password didn't match");
    const tokens = await this.signToken(user.id, user.email, user.role);
    response.cookie('token', tokens.access_token, {
      httpOnly: process.env.httpOnly === 'true' ? true : false,
      sameSite: 'none',
      secure: process.env.PRODUCTION === 'true' ? true : false,
    });
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async getUser(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        email: true,
        role: true,
        password_reset: true,
        name: true,
      },
    });
  }

  async changepassword(userId: number, dto: PasswordResetDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new ForbiddenException('User not found');
    if (user.disabled_by_admin)
      throw new ForbiddenException('User not allowed');
    const passwordMatches = await bcrypt.compare(
      dto.current_password,
      user.password,
    );
    if (!passwordMatches)
      throw new UnauthorizedException('Password did not match');

    const hash = await this.hashData(dto.password);

    const updateUser = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hash,
        password_reset: false,
      },
    });
    const tokens = await this.signToken(
      updateUser.id,
      updateUser.email,
      updateUser.role,
    );
    await this.updateRtHash(updateUser.id, tokens.refresh_token);
    return tokens;
  }

  async resetPassword(dto: ResetPasswordDTO) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (user.disabled_by_admin) {
      throw new ForbiddenException(
        'Could not send email. Please contact admin',
      );
    }
    const plainPassword = Math.random().toString(36).substring(2, 10);
    const pwd = await this.hashData(plainPassword);
    await this.prisma.user.update({
      where: {
        email: dto.email,
      },
      data: {
        password: pwd,
        password_reset: true,
      },
    });
    await this.mailService.sendResetEmail(user, plainPassword);
    return { success: true };
  }

  async logout(userId: number) {
    await this.prisma.user.updateMany({
      where: {
        id: userId,
        hashRt: {
          not: null,
        },
      },
      data: {
        hashRt: null,
      },
    });
    return 'Logged out';
  }

  async refresh(userId: number, rt: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user || !user.hashRt) throw new ForbiddenException('Access denied');

    const rtMatches = await bcrypt.compare(rt, user.hashRt);
    if (!rtMatches) throw new ForbiddenException('Access denied');

    const tokens = await this.signToken(user.id, user.email, user.role);
    await this.updateRtHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async updateRtHash(userId: number, rt: string) {
    const hash = await this.hashData(rt);
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        hashRt: hash,
      },
    });
  }

  async changeRole(role: ChangeRoleDTO) {
    const userExist = await this.prisma.user.findFirst({
      where: {
        id: role.userId,
      },
    });
    if (!userExist) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.update({
      where: {
        id: userExist.id,
      },
      data: {
        role: role.role,
      },
    });
    return { success: true };
  }

  async signToken(userId: number, email: string, role: ROLE): Promise<Tokens> {
    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(
        {
          id: userId,
          email,
          role,
        },
        {
          expiresIn: 60 * 15 * 60,
          secret: 'at-secret',
        },
      ),
      this.jwtService.signAsync(
        { id: userId, email, role },
        { expiresIn: 60 * 60 * 24 * 7, secret: 'rt-secret' },
      ),
    ]);
    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  async kycForm(dto: KycDTO, userId: number) {
    const findVerified = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (findVerified.verified === true) {
      throw new ForbiddenException('Your KYC is already verified');
    }
    const kyc = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        verified: true,
        kyc: {
          create: {
            registeredName: dto.name,
            gender: dto.gender,
            dob: dto.dob,
            father_husbandName: dto.father_husbandName,
            grandFather_fatherInLawName: dto.grandfather_fatherInLawName,
            spouseName: dto.spouseName,
            occupation: dto.occupation,
            panNumber: dto.panNumber,
            landLineNumber: dto.landLineNumber,
            documentIssuedAddress: dto.documentIssuedAddress,
            documentImage: {
              create: {
                faceImage: dto.faceImage,
                frontDocumentImage: dto.frontdocumentImage,
                backDocumentImage: dto.backdocumentImage,
              },
            },
          },
        },
        PermanentAddress: {
          create: {
            province: dto.per_province,
            district: dto.per_district,
            vdc_Municipality: dto.per_vdc_Municipality,
          },
        },
        CurrentAddress: {
          create: {
            province: dto.curr_province,
            district: dto.curr_district,
            vdc_Municipality: dto.curr_vdc_Municipality,
          },
        },
      },
    });
    return { success: true };
  }
}
