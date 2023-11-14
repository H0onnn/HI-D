export interface NotificationInterface {
  dataList: NotificationData[];
}

export interface NotificationData {
  notificationId: number;
  type: NotificationType;
  content: string;
  postId: number;
  replyId: number;
  createAt: string;
}

export enum NotificationType {
  REPLY = 'REPLY',
  POST_REPORT = 'POST_REPORT',
  REPLY_REPORT = 'REPLY_REPORT',
}
