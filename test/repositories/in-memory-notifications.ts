import { Notification } from 'src/app/entities/notification';
import { NotificationsRepository } from 'src/app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];
  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }
  async create(notification: Notification) {
    this.notifications.push(notification);
  }
  save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
