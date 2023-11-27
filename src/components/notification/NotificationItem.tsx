import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteNotification } from '@/store/notificateStore';
import { deleteNotificationById } from '@/services/notification';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { NotificationData } from '@/types/notification';
import { timeSince } from '@/utils/calculateDate';
import { LINK } from '@/constants/links';
import ICON from '@/public/images/ui/notification_post.svg';
import MORE_ICON from '@/public/images/ui/notification_more.svg';
import DELETE from '@/public/images/ui/notification_delete.svg';

interface NotificationItemInterface {
  notifications: NotificationData[];
  isGrouped: boolean;
  onToggle: () => void;
  expanded: boolean;
  className?: string;
  isEditing: boolean;
}

const NotificationItem = ({
  notifications,
  isGrouped,
  onToggle,
  expanded,
  className,
  isEditing,
}: NotificationItemInterface) => {
  const navigate = useNavigate();
  const deleteNotification = useDeleteNotification();

  const deleteNotificationHandler = async (notificationId: number) => {
    await deleteNotificationById(notificationId);
    deleteNotification(notificationId);
  };

  const renderTitle = (notification: NotificationData) => {
    if (notification.type === 'REPLY') {
      return '내 게시글에 새로운 댓글이 있어요!';
    }

    if (notification.type === 'POST_REPORT') {
      return '내 게시글에 신고가 1회 접수되었어요.';
    }

    return '내 댓글에 신고가 1회 접수되었어요.';
  };

  const renderNotification = (notification: NotificationData) => {
    return (
      <>
        <NotificationHeader>
          <NotificationIcon src={ICON} alt='notification_icon' />
          <NotificationTitle>{renderTitle(notification)}</NotificationTitle>
        </NotificationHeader>
        <NotificationContent>{notification.content}</NotificationContent>
        {isEditing ? (
          <DeleteButton
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              deleteNotificationHandler(notification.notificationId);
            }}
          >
            <DeleteIcon src={DELETE} alt='delete_icon' />
          </DeleteButton>
        ) : (
          <DateContainer>
            <BlueDiv />
            <Date>{timeSince(notification.createAt)}</Date>
          </DateContainer>
        )}
      </>
    );
  };

  const renderMoreButton = () => {
    return (
      <>
        {isGrouped && (
          <MoreButtonContainer onClick={onToggle}>
            <MoreText>{expanded ? '간략히 보기' : '더보기'}</MoreText>
            <MoreIcon src={MORE_ICON} alt='more_icon' />
          </MoreButtonContainer>
        )}
      </>
    );
  };

  const latestNotification = notifications[notifications.length - 1];

  const moveToPostHandler = (notification: NotificationData) => {
    navigate(`${LINK.POST}/${notification.postId}`);
  };

  return (
    <Layout expanded={expanded}>
      {!expanded && (
        <NotificationContainer
          className={className}
          expanded={expanded}
          onClick={() => moveToPostHandler(latestNotification)}
        >
          {renderNotification(latestNotification)}
          {renderMoreButton()}
        </NotificationContainer>
      )}

      <div style={{ position: 'relative' }}>
        {expanded &&
          notifications.reverse().map((notification) => (
            <MoreNotificateContainer
              key={notification.notificationId}
              onClick={() => moveToPostHandler(notification)}
            >
              {renderNotification(notification)}
            </MoreNotificateContainer>
          ))}
        {renderMoreButton()}
      </div>
    </Layout>
  );
};

export default NotificationItem;

const Layout = styled.div<{ expanded: boolean }>`
  width: 100%;
  height: ${({ expanded }) => (expanded ? 'auto' : '9.5rem')};
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const NotificationContainer = styled.div<{ expanded: boolean }>`
  width: 100%;
  height: 9.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  position: relative;
  z-index: 2;

  &.grouped {
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: ${colors.white};
    }

    &:before {
      transform: translateY(-5px);
      z-index: -2;
    }

    &:after {
      transform: translateY(-10px);
      z-index: -1;
    }
  }

  &:not(.grouped):before,
  &:not(.grouped):after {
    display: none;
  }
`;

const MoreNotificateContainer = styled.div`
  width: 100%;
  height: 9.5rem;
  padding: 1.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray2};

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NotificationTitle = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  color: ${colors.black};
`;

const NotificationIcon = styled.img`
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  align-items: flex-end;
`;

const BlueDiv = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background-color: ${colors.primary};
`;

const Date = styled.p`
  font-size: 12px;
  line-height: 15px;
  color: ${colors.secondary};
`;

const NotificationContent = styled.p`
  width: 75%;
  font-size: 14px;
  line-height: 24px;
  color: ${colors.gray7};

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 2;
`;

const MoreText = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${colors.gray5};
`;

const MoreIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: contain;
`;

const DeleteButton = styled.div`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  pointer-events: auto;
`;

const DeleteIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
