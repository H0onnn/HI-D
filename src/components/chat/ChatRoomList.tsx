import React, { useEffect } from 'react';
import useObserver from '../../hooks/useObserver';
import ChatRoomItem from './ChatRoomItem';
import ErrorContent from '../public/ErrorContent';
import { ChatRoomContainer } from '@/styles/chat';
import useChatRooms from '@/hooks/useChatRooms';
import LoadingContent from '../public/LoadingContent';
import useModalStore from '@/store/modalStore';

const ChatRoomList = () => {
  const { data, isFetching, moreDataHandler, refetch } = useChatRooms();
  const { modalOpen } = useModalStore();
  const loadMoreRef = useObserver(() => moreDataHandler());

  useEffect(() => {
    refetch();
  }, [modalOpen]);

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
