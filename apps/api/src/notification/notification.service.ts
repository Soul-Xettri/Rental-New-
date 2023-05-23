import { Injectable, NotFoundException } from '@nestjs/common';
import { ROLE } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { SendNotificationsDTO } from './dto/send-notification.dto';
import axios from 'axios';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  async findAllAdmin() {
    const notifications = await this.prisma.user.findFirst({
      where: {
        role: ROLE.ADMIN,
      },
      select: {
        Notification: {
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });
    return notifications;
  }

  async findMy(userId: number) {
    const notifications = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        Notification: true,
      },
    });
    return notifications;
  }

  async registerToken(userId: number, RegisterTokenDTO: CreateNotificationDto) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        NotificationToken: {
          upsert: {
            create: {
              token: RegisterTokenDTO.token,
            },
            update: {
              token: RegisterTokenDTO.token,
            },
          },
        },
      },
    });
    return true;
  }

  async adminNotification(dto: SendNotificationsDTO) {
    try {
      const notificationTokens = await this.prisma.notificationToken.findMany();
      const tokenArray = notificationTokens.map((token) => {
        return {
          to: token.token,
          sound: 'default',
          title: 'Alert 📣',
          body: dto.message,
        };
      });
      await axios.post(
        'https://exp.host/--/api/v2/push/send',
        JSON.stringify(tokenArray),
        {
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
        },
      );
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  }

  async send(userId: number, title: string, message: string) {
    const tokenExists = await this.prisma.notificationToken.findFirst({
      where: {
        userId: userId,
      },
    });
    if (!tokenExists) {
      return;
    }
    const notificationMessage = {
      to: tokenExists.token,
      sound: 'default',
      title: title,
      body: message,
    };
    await axios.post(
      'https://exp.host/--/api/v2/push/send',
      JSON.stringify(notificationMessage),
      {
        headers: {
          Accept: 'application/json',
          'Accept-encoding': 'gzip, deflate',
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
