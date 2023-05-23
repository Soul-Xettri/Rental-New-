import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { ROLE } from '@prisma/client';
import { RoleGuard } from '../common/guards/role.guard';
import { GetCurrentUserId, Roles } from 'src/common/decorators';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { SendNotificationsDTO } from './dto/send-notification.dto';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Notification-Controller')
@ApiBearerAuth()
@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationsService: NotificationService) {}

  @Post('/register')
  @ApiOperation({
    summary:
      'Create new notification token like APPOINTMENT/MESSAGE (used by CLIENT and AGENT)',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        token: {
          type: 'boolean',
          description: 'New token notification token (APPOINTMENT/MESSAGE)',
          example: 'APPOINMENT',
        },
      },
    },
  })
  @Roles(ROLE.CLIENT)
  @UseGuards(RoleGuard)
  registerToken(
    @GetCurrentUserId() userId: number,
    @Body() RegisterTokenDTO: CreateNotificationDto,
  ) {
    return this.notificationsService.registerToken(userId, RegisterTokenDTO);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all notification (accessed by SUPERADMIN and ADMIN)',
  })
  @Roles(ROLE.SUPERADMIN, ROLE.ADMIN)
  @UseGuards(RoleGuard)
  findAllAdmin() {
    return this.notificationsService.findAllAdmin();
  }

  @Get('/my')
  @ApiOperation({
    summary: 'Get Mynotification',
  })
  findMy(@GetCurrentUserId() userId: number) {
    return this.notificationsService.findMy(userId);
  }

  @Post('send')
  @ApiOperation({
    summary:
      'Send notification to Clients and Agents (accessed by SUPERADMIN and ADMIN)',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          description:
            'Any notification message the SuperAdmin/Admin want to send',
          example: 'How are you doing sir?',
        },
      },
    },
  })
  @Roles(ROLE.SUPERADMIN, ROLE.ADMIN)
  @UseGuards(RoleGuard)
  adminNotification(@Body() SendNotificationsDTO: SendNotificationsDTO) {
    return this.notificationsService.adminNotification(SendNotificationsDTO);
  }
}
