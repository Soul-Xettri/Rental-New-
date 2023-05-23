import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { MailService } from 'src/mail/mail.service';
import { NotificationService } from 'src/notification/notification.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageService } from './message.service';
import { Public, Roles } from 'src/common/decorators';
import { NotificationType, ROLE } from '@prisma/client';
import { RoleGuard } from 'src/common/guards';
import { GetCurrentUserId } from 'src/common/decorators';
import { CreateMessageDto } from './dto/create-message.dto';
import { UseGuards } from '@nestjs/common/decorators';
import { NewMessageEvent } from 'src/events/NewMessage';
import { NewMessageAdminEvent } from 'src/events/NewMessageAdmin';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Message-Controller')
@ApiBearerAuth()
@Controller('message')
export class MessageController {
  constructor(
    private readonly messagesService: MessageService,
    private eventEmitter: EventEmitter2,
    private prisma: PrismaService,
    private notification: NotificationService,
    private mailService: MailService,
  ) {}
  @Get('/my')
  @ApiOperation({ summary: 'Get all myMessages' })
  findMy(@GetCurrentUserId() id: number) {
    return this.messagesService.findMy(+id);
  }
  @Post(':id')
  @ApiOperation({ summary: 'Send messages to user throught their id' })
  create(
    @Body() createMessageDto: CreateMessageDto,
    @Param('id') id: string,
    @GetCurrentUserId() senderId: number,
  ) {
    return this.messagesService.create(createMessageDto, +senderId, +id);
  }
  @Post('/admin/:id')
  @ApiOperation({ summary: 'Sending messages from SuperAdmin to Admin' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          description: 'Message from SuperAdmin to Admin',
          example: 'I have sent message to you Admin',
        },
      },
    },
  })
  @Roles(ROLE.SUPERADMIN)
  @UseGuards(RoleGuard)
  sendAdmin(
    @Body() createMessageDto: CreateMessageDto,
    @GetCurrentUserId() senderId: number,
    @Param('id') receiverId: string,
  ) {
    return this.messagesService.sendAdmin(
      createMessageDto,
      +senderId,
      +receiverId,
    );
  }
  @Get()
  @ApiOperation({
    summary: 'Get all messages (Accessed only by SuperAdmin)',
  })
  @Roles(ROLE.SUPERADMIN)
  @UseGuards(RoleGuard)
  findAll(@GetCurrentUserId() id: number) {
    return this.messagesService.findAll(id);
  }
  @Get(':id')
  @ApiOperation({
    summary: 'Get specific user message with their id',
  })
  @ApiOperation({
    summary:
      'Get messages from user throught their id (Accessed only by SuperAdmin and Admin)',
  })
  @Roles(ROLE.SUPERADMIN, ROLE.ADMIN)
  @UseGuards(RoleGuard)
  findOne(@Param('id') receiverId: string) {
    return this.messagesService.findOne(+receiverId);
  }
  @OnEvent('message.user')
  async handleNewMessageUserNotificationEvent(payload: NewMessageEvent) {
    await this.notification.send(
      payload.clientUserId,
      'New Message',
      `You've got new message`,
    );
  }
  @OnEvent('message.admin')
  async handleNewMessageAdminNotificationEvent(payload: NewMessageAdminEvent) {
    const user = await this.prisma.user.findFirst({
      where: {
        id: payload.clientId,
      },
    });
    await this.prisma.notification.create({
      data: {
        title: 'Message received',
        description: `Message received from ${user.name}`,
        userId: payload.userId,
        type: NotificationType.MESSAGE,
      },
    });
    const receiver = await this.prisma.user.findFirst({
      where: {
        id: payload.userId,
      },
    });
    await this.mailService.sendNotificationMail(
      receiver,
      'New message received',
      `Message received from ${user.name}`,
    );
  }
}
