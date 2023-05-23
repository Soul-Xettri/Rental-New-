import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Res,
  Param,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignInDTO, AuthSignupDTO } from './dto/auth.dto';
import { ROLE } from '@prisma/client';
import { Tokens } from './types';
import { Response } from 'express';
import { KycDTO } from './dto/kyc.dto';
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
  Roles,
  TokenUser,
} from 'src/common/decorators';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { PasswordResetDTO, ResetPasswordDTO } from './dto/password.dto';
import { Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { RoleGuard, RtGuard } from 'src/common/guards';
import { ChangeRoleDTO } from './dto/change-role.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @ApiOperation({ summary: 'Add new admin' })
  @ApiCreatedResponse({ description: 'New user added' })
  @ApiForbiddenResponse({ status: 400, description: 'Forbidden Error' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        firstname: {
          type: 'string',
          description: "User's firstname",
          example: 'Peter',
        },
        lastname: {
          type: 'string',
          description: "User's lastname",
          example: 'Pan',
        },
        mobileNumber: {
          type: 'string',
          description: "User's Phone Number",
        },
        email: {
          type: 'email',
          description: 'The email id of the user',
          example: 'user@app.com',
        },
        password: {
          type: 'password',
          description: 'The password for the user account',
          example: 'password',
        },
        confirmPassword: {
          type: 'confirm password',
          description: 'Password conformation',
          example: 'password',
        },
      },
    },
  })
  @HttpCode(HttpStatus.CREATED)
  signUp(@Body() dto: AuthSignupDTO): Promise<Tokens> {
    return this.authService.signUp(dto, ROLE.ADMIN);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login' })
  @ApiForbiddenResponse({ description: 'user does not exits' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'email',
          description: 'The email id of the user',
          example: 'user@app.com',
        },
        password: {
          type: 'password',
          description: 'The password for the user account',
          example: 'password',
        },
      },
    },
  })
  async sigin(
    @Body() dto: AuthSignInDTO,
    @Res({ passthrough: true }) response: Response,
  ): Promise<Tokens> {
    const tokens = await this.authService.signin(dto, response);
    response.cookie('access_token', tokens.access_token, {
      sameSite: 'none',
      secure: process.env.PRODUCTION === 'true' ? true : false,
      httpOnly: process.env.httpOnly ? true : false,
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 180),
    });
    response.cookie('refresh_token', tokens.access_token, {
      sameSite: 'none',
      secure: process.env.PRODUCTION === 'true' ? true : false,
      httpOnly: process.env.httpOnly ? true : false,
      expires: new Date(Date.now() + 3600 * 1000 * 24 * 180),
    });
    return tokens;
  }

  @Post('kyc')
  @ApiOperation({ summary: 'User Kyc form fill up' })
  @ApiForbiddenResponse({ description: 'Your KYC is already verified' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'The name of the User',
          example: 'John Wick',
        },
        gender: {
          type: 'boolean',
          description: "User's gender (MALE/FEMALE/OTHERS)",
          example: 'MALE',
        },
        dob: {
          type: 'string',
          description: "Users's DOB",
          example: '1999-12-4',
        },
        father_husbandName: {
          type: 'string',
          description: 'father or husband Name',
          example: 'Saitama',
        },
        grandfather_fatherInLawName: {
          type: 'string',
          description: 'grand father or father In Law Name',
          example: 'Hendry',
        },
        spouseName: {
          type: 'string',
          description: 'spouseName and this field is optional',
          example: 'Rias',
        },
        occupation: {
          type: 'string',
          description: 'User occupation',
          example: 'Student',
        },
        panNumber: {
          type: 'string',
          description: 'panNumber and this field is optional',
          example: '2132321',
        },
        landLineNumber: {
          type: 'string',
          description: 'landLineNumber and this field is optional',
          example: '021-123456',
        },
        documentIssuedAddress: {
          type: 'string',
          description: 'document Issued Address',
          example: 'Earth',
        },
        faceImage: {
          type: 'image',
          description: 'user face image',
          example: 'face.jpg',
        },
        frontdocumentImage: {
          type: 'image',
          description: 'front image of the doc(citizenship/password)',
          example: 'front.jpg',
        },
        backdocumentImage: {
          type: 'image',
          description: 'back image of the doc(citizenship/password)',
          example: 'back.jpg',
        },
        per_province: {
          type: 'Boolean',
          description:
            'permanent province address(PROVINCE_1,PROVINCE_2,PROVINCE_3,PROVINCE_4,PROVINCE_5,PROVINCE_6,PROVINCE_7)',
          example: 'PROVINCE_4',
        },
        per_district: {
          type: 'string',
          description: 'permanent distict address',
          example: 'Kaski',
        },
        per_vdc_Municipality: {
          type: 'string',
          description: 'permanent distict address',
          example: 'Pokhara Mahanagarpalika',
        },
        curr_province: {
          type: 'Boolean',
          description:
            'current province address(PROVINCE_1,PROVINCE_2,PROVINCE_3,PROVINCE_4,PROVINCE_5,PROVINCE_6,PROVINCE_7)',
          example: 'PROVINCE_4',
        },
        curr_district: {
          type: 'string',
          description: 'current distict address',
          example: 'Kaski',
        },
        curr_vdc_Municipality: {
          type: 'string',
          description: 'current distict address',
          example: 'Pokhara Mahanagarpalika',
        },
      },
    },
  })
  kycForm(@GetCurrentUserId() userId: TokenUser, @Body() dto: KycDTO) {
    return this.authService.kycForm(dto, +userId);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User logout' })
  logout(
    @GetCurrentUserId() userId: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    response.cookie('access_token', '', {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    });
    return this.authService.logout(userId);
  }

  @Post('change_password')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Change Password' })
  @ApiForbiddenResponse({ description: 'User not found' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        current_password: {
          type: 'password',
          description: 'current password of the account',
          example: 'password',
        },
        password: {
          type: 'password',
          description: 'new password for the account',
          example: 'newpassword',
        },
      },
    },
  })
  async changepassword(
    @Body() dto: PasswordResetDTO,
    @GetCurrentUserId() userId: number,
    @Res({ passthrough: true }) response: Response,
  ) {
    const tokens = await this.authService.changepassword(userId, dto);
    response.cookie('access_token', tokens.access_token, {
      sameSite: 'none',
      secure: true,
      httpOnly: true,
    });
    return tokens;
  }

  @Public()
  @ApiOperation({ summary: 'Password Reset' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: {
          type: 'email',
          description: 'The user registered email',
          example: 'client4ever@gmail.com',
        },
      },
    },
  })
  @Post('reset_password')
  @HttpCode(HttpStatus.OK)
  async reset_password(@Body() dto: ResetPasswordDTO) {
    return await this.authService.resetPassword(dto);
  }

  @Get('me')
  @ApiOperation({ summary: 'Get current user info' })
  @HttpCode(HttpStatus.OK)
  user(@GetCurrentUserId() userId: TokenUser) {
    return this.authService.getUser(+userId);
  }

  @Public()
  @ApiOperation({ summary: 'Refresh user token' })
  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh(
    @GetCurrentUser('refreshToken') token: string,
    @GetCurrentUserId() userId: number,
  ) {
    return this.authService.refresh(userId, token);
  }

  @Post('role')
  @ApiOperation({
    summary:
      'Change user role = CLIENT/ADMIN/AGENT/SUPERADMIN (only accessed by SuperADmin) ',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          description:
            'Id of the user for whose the role is going to be changed',
          example: '3',
        },
        role: {
          type: 'Boolean',
          description: 'Choose role between CLIENT/ADMIN/AGENT/SUPERADMIN',
          example: 'CLIENT',
        },
      },
    },
  })
  @Roles(ROLE.SUPERADMIN)
  @UseGuards(RoleGuard)
  changeRole(@Body() ChangeRoledto: ChangeRoleDTO) {
    return this.authService.changeRole(ChangeRoledto);
  }
}
