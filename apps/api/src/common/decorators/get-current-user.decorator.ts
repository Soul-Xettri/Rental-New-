import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ROLE } from '@prisma/client';

export const GetCurrentUser = createParamDecorator(
  (data: string | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    if (!data) return request.user;
    return request.user[data];
  },
);

export interface TokenUser {
  id: number;
  email: string;
  role: ROLE;
  iat: number;
  exp: number;
}
