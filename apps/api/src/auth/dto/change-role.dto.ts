import { ROLE } from '@prisma/client';
import { IsNotEmpty, IsNumber, Validate } from 'class-validator';
import { MatchRole } from 'src/common/validation/Role.Validator';

export class ChangeRoleDTO {
  @Validate(MatchRole)
  @IsNotEmpty()
  role: ROLE;
  @IsNumber()
  userId: number;
}
