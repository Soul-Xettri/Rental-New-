import { Transform } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Max,
  Min,
  MinDate,
} from 'class-validator';
import { time } from 'console';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
