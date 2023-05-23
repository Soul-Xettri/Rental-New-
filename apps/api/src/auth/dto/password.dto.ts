import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class PasswordResetDTO {
  @IsNotEmpty()
  @IsString()
  current_password: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class ResetPasswordDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
