import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendRegistrationEmail(user: User, password: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Welcome to Room Rental',
      template: process.cwd() + '/dist/mail/templates/newuser.hbs',
      context: {
        name: user.name,
        password,
      },
    });
  }

  async sendResetEmail(user: User, password: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'New password for Room Rental',
      template: process.cwd() + '/dist/mail/templates/resetpassword.hbs',
      context: {
        name: user.name,
        password,
      },
    });
  }

  async sendNotificationMail(user: User, title: string, message: string) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'New Notification',
      template: process.cwd() + '/dist/mail/templates/notificationmail.hbs',
      context: {
        title,
        message,
      },
    });
  }
}
