import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageController } from './message.controller';
import { MailModule } from 'src/mail/mail.module';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationService } from 'src/notification/notification.service';

@Module({
  imports: [MailModule, EventEmitter2],
  providers: [MessageService, PrismaService, NotificationService],
  controllers: [MessageController],
})
export class MessageModule {}
