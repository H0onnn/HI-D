import React from 'react';
import useObserver from '../../hooks/useObserver';
import ChatRoomItem from './ChatRoomItem';
import ErrorContent from '../public/ErrorContent';
import { ChatRoomContainer } from '@/styles/chat';
import useChatRooms from '@/hooks/useChatRooms';
import LoadingContent from '../public/LoadingContent';

const ChatRoomList = () => {
  const { data, isFetching, moreDataHandler } = useChatRooms();
  const loadMoreRef = useObserver(() => moreDataHandler());

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
          page.dataList.map((chatRoom, index) => <ChatRoomItem key={index} chatRoom={chatRoom} />),
        )}
        {isFetching ? <LoadingContent /> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
      </ChatRoomContainer>
    </>
  );
};
export default ChatRoomList;
