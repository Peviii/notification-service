import { Content } from './content';
import { Notification } from './notification';

describe('notification ', () => {
  test('it should be able to create a notification ', () => {
    const notification = new Notification({
      content: new Content('nova solicitação de conexão'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });
    expect(notification).toBeTruthy();
  });
});
