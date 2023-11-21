import React, { useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import ChatRoomItem from './ChatRoomItem';
import ErrorContent from '../public/ErrorContent';
import { ChatRoomContainer } from '@/styles/chat';
import useChatRooms from '@/hooks/useChatRooms';
import LoadingContent from '../public/LoadingContent';
import useModalStore from '@/store/modalStore';
import { useChatMessageStore } from '@/store/chatMessageStore';

const ChatRoomList = () => {
  const { data, isFetching, moreDataHandler, refetch } = useChatRooms();
  const { modalOpen } = useModalStore();
  const loadMoreRef = useObserver(() => moreDataHandler());
  const { newChatNotification, setNewChatNotification } = useChatMessageStore();

  useEffect(() => {
    refetch();
  }, [modalOpen]);

  useEffect(() => {
    if (newChatNotification) {
      refetch();
      setNewChatNotification(false);
    }
  }, [newChatNotification]);

  if (!data || data.pages[0].dataList.length === 0) {
    return (
      <ChatRoomContainer>
        <ErrorContent />
      </ChatRoomContainer>
    );
  }

  return (
    <>
      <ChatRoomContainer>
        {data?.pages.map((page) =>
          page.dataList.map((chatRoom, index) => (
            <ChatRoomItem key={index} chatRoom={chatRoom} refetch={refetch} />
          )),
        )}
        {isFetching ? <LoadingContent /> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
      </ChatRoomContainer>
    </>
  );
};
export default ChatRoomList;
