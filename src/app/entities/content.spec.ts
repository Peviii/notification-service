import { Content } from './content';

describe('notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Content('voce recebeu uma nova notificação');
    expect(content).toBeTruthy();
  });
  test('it should not be able to create a notification content with less 5 characters', () => {
    expect(() => new Content('voce')).toThrow();
  });
  test('it should not be able to create a notification content with more then 256 characters', () => {
    expect(() => new Content('v'.repeat(257))).toThrow();
  });
});
