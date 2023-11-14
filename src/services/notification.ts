import { httpClient } from '@/api/httpClient';
import { NotificationInterface } from '@/types/notification';

export const getNotifications = async (): Promise<NotificationInterface> => {
  const response = await httpClient.notification.get.notification();
  return response.data;
};
