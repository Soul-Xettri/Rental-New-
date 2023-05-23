import { IsString } from 'class-validator';

export class SendNotificationsDTO {
  @IsString()
  message: string;
}
