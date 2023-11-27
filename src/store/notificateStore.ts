import { create } from 'zustand';
import { NotificationData } from '@/types/notification';

interface NotificationState {
  notifications: NotificationData[];
  addNotification: (notification: NotificationData) => void;
  deleteNotification: (notifiactionId: number) => void;
  deleteAllNotifications: (notificationIds: number[]) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
  deleteNotification: (notifiactionId: number) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.notificationId !== notifiactionId,
      ),
    })),
  deleteAllNotifications: (notificationIds: number[]) =>
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => !notificationIds.includes(notification.notificationId),
      ),
    })),
}));

export const useNotifications = () => useNotificationStore((state) => state.notifications);
export const useAddNotification = () => useNotificationStore((state) => state.addNotification);
export const useDeleteNotification = () =>
  useNotificationStore((state) => state.deleteNotification);
export const useDeleteAllNotifications = () =>
  useNotificationStore((state) => state.deleteAllNotifications);
