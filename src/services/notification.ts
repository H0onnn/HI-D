import { httpClient } from '@/api/httpClient';
import { NotificationInterface } from '@/types/notification';

export const getNotifications = async (): Promise<NotificationInterface> => {
  const response = await httpClient.notification.get.notification();
  return response.data;
};

export const getNewNotificationsBeforeLogin = async (): Promise<boolean> => {
  try {
    const response = await httpClient.notification.get.newBeforeLogin();
    return response.data;
  } catch (err: unknown) {
    console.error('새 알림 조회 에러 : ', err);
    throw err;
  }
};

export const deleteNotificationById = async (notificationId: number): Promise<void> => {
  try {
    await httpClient.notification.delete.notification(notificationId);
  } catch (err: unknown) {
    console.error('알림 삭제 에러 : ', err);
    throw err;
  }
};

export const deleteAllNotificationsByIds = async (notificationIds: number[]): Promise<void> => {
  try {
    await httpClient.notification.delete.allNotifications(notificationIds);
  } catch (err: unknown) {
    console.error('전체 알림 삭제 에러 : ', err);
    throw err;
  }
};
