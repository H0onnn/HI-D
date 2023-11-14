import React, { useState } from 'react';
import styled from 'styled-components';
import { useNotifications } from '@/store/notificateStore';
import NotificationItem from './NotificationItem';
import { NotificationData } from '@/types/notification';

interface NotificationListInterface {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationList = ({ isEditing, setIsEditing }: NotificationListInterface) => {
  const notificationsData = useNotifications();
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  console.log(notificationsData);

  const groupedNotifications = notificationsData.reduce(
    (acc, notification) => {
      const key = (notification.postId || notification.replyId).toString();
      if (!acc[key]) {
        acc[key] = [notification];
      } else {
        acc[key].push(notification);
      }
      return acc;
    },
    {} as { [key: string]: typeof notificationsData },
  );

  const getLatestTimestamp = (notifications: NotificationData[]) => {
    return Math.max(
      ...notifications.map((notification) => new Date(notification.createAt).getTime()),
    );
  };

  const sortedNotifications = Object.values(groupedNotifications).sort(
    (a, b) => getLatestTimestamp(b) - getLatestTimestamp(a),
  );

  const toggleExpanded = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout>
      {sortedNotifications.map((notifications) => {
        const groupId = (notifications[0].postId || notifications[0].replyId).toString();
        const isGrouped = notifications.length > 1;
        const isExpanded = expanded[groupId] || false;

        return (
          <NotificationItem
            key={notifications[0].notificationId.toString()}
            notifications={notifications}
            isGrouped={isGrouped}
            expanded={isExpanded}
            onToggle={() => toggleExpanded(groupId)}
            className={isGrouped && !isExpanded ? 'grouped' : ''}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        );
      })}
    </Layout>
  );
};

export default NotificationList;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
