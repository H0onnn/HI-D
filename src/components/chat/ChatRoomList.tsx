import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useObserver from '../../hooks/useObserver';
import ChatRoomItem from './ChatRoomItem';
import { ChatRoomInterface, ChatRoomListInterface, PageStatusInterface } from '../../types/chat';

type Props = {
  chatRoomClick: (roomId: number) => void;
};

const ChatRoomList = ({ chatRoomClick }: Props) => {
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: true });
  const [ChatRoomList, setChatRoomList] = useState<ChatRoomInterface[]>([]);
  const infinityRef = useObserver(() => nextPageHandler());

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };
  const piledUpChatRoomList = (data: ChatRoomInterface[]) => {
    setChatRoomList((prev) => [...prev, ...data]);
  };

  const getChatRoomList = async ({ page = 1 }) => {
    if (!isNext) return;
    try {
      // setStatus({ loading: true, error: null });
      // const response = await axios('/chat', { params: { page } });
      // const data = await response.data;
      console.log(page);
      const data: ChatRoomListInterface = await {
        dataList: [
          {
            roomId: 1,
            members: [
              {
                id: 1,
                nickname: '상대방닉네임',
                profileImage: '',
              },
              { id: 2, nickname: '나의닉네임', profileImage: '' },
            ],
            recentChatContent:
              '최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용최근 채팅 내용',
            recentChatTime: '최근 채팅 시간',
          },
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
    <>
      <ChatRoomContainer>
        {ChatRoomList.map((chatRoom, index) => (
          <ChatRoomItem
            key={index}
            chatRoom={chatRoom}
            chatRoomClick={() => chatRoomClick(chatRoom.roomId)}
          />
        ))}
        {isNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
      </ChatRoomContainer>
    </>
  );
};
export default ChatRoomList;

const ChatRoomContainer = styled.div`
  width: 100%;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  padding: 0 2rem;
  gap: 0.8rem;
`;
