import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLE } from '@prisma/client';
import { Observable } from 'rxjs';
import { PrismaService } from 'src/prisma/prisma.service';
import * as request from 'supertest';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(PrismaService) private readonly prisma: PrismaService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const role = this.reflector.getAllAndOverride<ROLE[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    const request = context.switchToHttp().getRequest();
    if (!role.includes(request.user.role)) {
      return false;
    }
    if (role.includes('CLIENT')) {
      const result = await this.checkActive(request.user.id);
      return result;
    }
    return true;
  }

  checkActive = async (userId: number) => {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (user.disabled_by_admin) {
      return false;
    }
    return true;
  };
}
