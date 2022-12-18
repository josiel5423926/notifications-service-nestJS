import { CancelNotification } from './cancel-notification';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications';
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';

describe('Cancel notifications', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      category: 'social',
      content: new Content('Nova solicitação de amizade!'),
      recipientId: 'example-recipient-id',
    });
    await notificationsRepository.create(notification);
    await cancelNotification.execute({
      notificationId: notification.id,
    });
    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });
});
