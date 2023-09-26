import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useObserver from '../../hooks/useObserver';
import ChatRoomItem from './ChatRoomItem';
import { ChatRoomInterface, ChatRoomListInterface, PageStatusInterface } from '../../types/chat';

type Props = {
  chatRoomClick: (roomId: number) => void;
};

export default function ChatRoomList({ chatRoomClick }: Props) {
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: false });
  const [piledChatRoomList, setPiledChatRoomList] = useState<ChatRoomInterface[]>([]);
  const infinityRef = useObserver(() => nextPageHandler());

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  const piledUpChatRoomList = (data: ChatRoomInterface[]) => {
    setPiledChatRoomList((prev) => [...prev, ...data]);
  };

  const getChatRoomList = async ({ page = 1 }) => {
    try {
      // setStatus({ loading: true, error: null });
      // const response = await axios('/chat', { params: { page } });
      // const data = await response.data;
      console.log(page);
      const data: ChatRoomListInterface = await {
        dataList: [
          { roomId: 1, members: ['you', 'me'] },
          { roomId: 2, members: ['you', 'me'] },
          { roomId: 3, members: ['you', 'me'] },
        ],
        size: 3,
        next: true,
      };
      setPage((prev) => ({ ...prev, isNext: data.next }));
      piledUpChatRoomList(data.dataList);
      // setStatus({ loading: false, error: null });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getChatRoomList({ page });
  }, [page]);

  return (
    <ChatRoomContainer>
      {piledChatRoomList.map((chatRoom, index) => (
        <ChatRoomItem
          key={index}
          chatRoom={chatRoom}
          chatRoomClick={() => chatRoomClick(chatRoom.roomId)}
        />
      ))}
      {isNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
    </ChatRoomContainer>
  );
}

const ChatRoomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
