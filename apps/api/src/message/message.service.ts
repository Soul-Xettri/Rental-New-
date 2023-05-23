import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { CreateMessageDto } from './dto/create-message.dto';
import { NewMessageEvent } from 'src/events/NewMessage';
import { NewMessageAdminEvent } from 'src/events/NewMessageAdmin';
import { ROLE } from '@prisma/client';

@Injectable()
export class MessageService {
  constructor(
    private prisma: PrismaService,
    private eventEmitter: EventEmitter2,
  ) {}
  async create(
    createmessagedto: CreateMessageDto,
    senderId: number,
    id: number,
  ) {
    const receiver = await this.prisma.user.findFirst({
      where: {
        id: id,
        // role: Role.AGENT || Role.ADMIN ,
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
    if (!receiver) {
      throw new NotFoundException('User not found');
    }
    if (senderId === receiver.id) {
      throw new NotFoundException('Cannot send messages to yourself');
    }
    const message = await this.prisma.messages.create({
      data: {
        message: createmessagedto.message,
        receiverId: receiver.id,
        senderId,
      },
    });
    this.eventEmitter.emit(
      'message.admin',
      new NewMessageAdminEvent(message.receiverId, senderId),
    );
    return message;
  }
  async sendAdmin(
    createMeassagedto: CreateMessageDto,
    senderId: number,
    receiverId: number,
  ) {
    const receiver = await this.prisma.user.findFirst({
      where: {
        id: receiverId,
        NOT: {
          role: ROLE.SUPERADMIN,
        },
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
    if (!receiver) {
      throw new NotFoundException('User Not Found');
    }
    if (senderId === receiverId) {
      throw new NotFoundException('Cannot send message to yourself');
    }
    const superAdmin = await this.prisma.user.findFirst({
      where: {
        role: ROLE.SUPERADMIN,
        // email: 'user1@app69.com',
      },
    });
    if (!superAdmin) {
      throw new ForbiddenException('You are not a superAdmin');
    }
    const message = await this.prisma.messages.create({
      data: {
        message: createMeassagedto.message,
        receiverId: receiver.id,
        senderId: superAdmin.id,
      },
    });
    this.eventEmitter.emit(
      'message.user',
      new NewMessageEvent(message.receiverId, senderId),
    );
    return message;
  }
  async findAll(id: number) {
    const sentMessages = await this.prisma.messages.findMany({
      select: {
        createdAt: true,
        message: true,
        sender: {
          select: {
            id: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    return sentMessages;
  }
  async findOne(receiverId: number) {
    const receiver = await this.prisma.user.findFirst({
      where: {
        id: receiverId,
        NOT: {
          role: ROLE.SUPERADMIN,
        },
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
    if (!receiver) {
      throw new NotFoundException('User not Found');
    }
    const superAdmin = await this.prisma.user.findFirst({
      where: {
        role: ROLE.SUPERADMIN,
      },
    });
    const messages = await this.prisma.messages.findMany({
      where: {
        OR: [
          {
            receiver: {
              id: receiverId,
            },
            sender: {
              id: superAdmin.id,
            },
          },
          {
            sender: {
              id: receiverId,
            },
            receiver: {
              id: superAdmin.id,
            },
          },
        ],
      },
      select: {
        createdAt: true,
        message: true,
        sender: {
          select: {
            id: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    const sortedMessages = messages.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
    return sortedMessages;
  }
  async findMy(id: number) {
    const receiver = await this.prisma.user.findFirst({
      where: {
        id,
        // NOT: {
        //   role: Role.SUPERADMIN,
        // },
      },
      select: {
        id: true,
        email: true,
        role: true,
      },
    });
    if (!receiver) {
      throw new NotFoundException('User not found');
    }
    const messageExists = await this.prisma.messages.findFirst({
      where: {
        OR: [{ receiverId: id }, { senderId: id }],
      },
    });
    if (!messageExists) {
      return [];
    }
    const messages = await this.prisma.messages.findMany({
      where: {
        OR: [
          {
            receiver: {
              id: id,
            },
          },
          {
            sender: {
              id: id,
            },
          },
        ],
      },
      select: {
        createdAt: true,
        message: true,
        sender: {
          select: {
            id: true,
            role: true,
          },
        },
        receiver: {
          select: {
            id: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
    // return messages;
    // const mergedMessages = [...messages[0].receiver, ...messages[0].sender];
    const sortedMessages = messages.sort(
      (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
    );
    return sortedMessages;
  }
}
