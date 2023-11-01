import React, { useEffect, useState } from 'react';
import useObserver from '../../hooks/useObserver';
import ChatRoomItem from './ChatRoomItem';
import { ChatRoomInterface, PageStatusInterface } from '../../types/chat';
import { getChatRoomList } from '@/services/chat';
import ErrorContent from '../public/ErrorContent';
import { ChatRoomContainer } from '@/styles/chat';

const ChatRoomList = () => {
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const [chatRoomList, setChatRoomList] = useState<ChatRoomInterface[]>([]);
  const infinityRef = useObserver(() => nextPageHandler());
  const [loading, setLoading] = useState<boolean>(false);

  const nextPageHandler = () => {
    setLoading(true);
    getChatRoomList({ page })
      .then((data) => {
        setPage((prev) => ({ ...prev, page: prev.page + 1, hasNext: data.hasNext }));
        setChatRoomList((prev) => [...prev, ...data.dataList]);
      })
      .catch(() => {
        setPage({ page: 0, hasNext: false });
      });
    setLoading(false);
  };

  useEffect(() => {
    if (!hasNext || loading || page === 0) return;
    nextPageHandler();
  }, [page, hasNext, loading]);

  useEffect(() => {}, []);
  return (
    <>
      <ChatRoomContainer>
        {chatRoomList.length === 0 && <ErrorContent />}
        {chatRoomList.map((chatRoom, index) => (
          <ChatRoomItem key={index} chatRoom={chatRoom} />
        ))}
        {!loading && hasNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
      </ChatRoomContainer>
    </>
  );
};
export default ChatRoomList;
