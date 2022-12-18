import { NotificationViewModel } from './../view-models/notification-view-model';
import { SendNotification } from './../../../app/use-cases/send-notification';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private SendNotification: SendNotification) {}
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.SendNotification.execute({
      recipientId,
      content,
      category,
    });
    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
