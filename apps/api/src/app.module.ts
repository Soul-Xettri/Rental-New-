import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { NotificationModule } from './notification/notification.module';
import { MailModule } from './mail/mail.module';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';
import { AtGuard, UsercheckGuard } from './common/guards';
import { APP_GUARD } from '@nestjs/core';
import { MessageModule } from './message/message.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { HomeModule } from './home/home.module';
import { UploadsModule } from './uploads/uploads.module';
import { PropertyModule } from './property/property.module';
@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
    }),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    PrismaModule,
    EventEmitterModule.forRoot(),
    AuthModule,
    NotificationModule,
    MailModule,
    MessageModule,
    HomeModule,
    UploadsModule,
    PropertyModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: UsercheckGuard,
    },
  ],
})
export class AppModule {}
