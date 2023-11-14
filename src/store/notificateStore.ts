import { create } from 'zustand';
import { NotificationData } from '@/types/notification';

interface NotificationState {
  notifications: NotificationData[];
  addNotification: (notification: NotificationData) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
  notifications: [],
  addNotification: (notification) =>
    set((state) => ({
      notifications: [...state.notifications, notification],
    })),
}));

export const useNotifications = () => useNotificationStore((state) => state.notifications);
export const useAddNotification = () => useNotificationStore((state) => state.addNotification);
