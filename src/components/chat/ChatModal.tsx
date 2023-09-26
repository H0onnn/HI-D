import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ChatContents from './ChatContents';
import { InputWrapper } from '../../styles/styles';
import Input from '../public/Input';
import { ChatInterface, ChatModalStatusInterface } from '../../types/chat';

type Props = {
  setChatModal: React.Dispatch<React.SetStateAction<ChatModalStatusInterface>>;
  status: ChatModalStatusInterface;
  openScroll: () => void;
};
const ChatModal = ({ setChatModal, status: { roomId }, openScroll }: Props) => {
  const modalBackground = useRef(null);
  const [chatContentList, setChatContentList] = useState<ChatInterface[]>([]);

  const modalBackgroundClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalBackground.current) {
      setChatModal({ isOpen: false, roomId: 0 });
      openScroll();
    }
  };

  const getChatByRoomId = async (roomId: number) => {
    // TODO: roomId로 채팅방 정보 가져오기
    // /chat-room/:roomId
    console.log(roomId);
    const data: ChatInterface[] = await [
      {
        nickname: 'nickname',
        content:
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
        date: 'date',
      },
      { nickname: 'myNickname', content: 'content', date: 'date' },
      { nickname: 'nickname', content: 'content', date: 'date' },
      { nickname: 'nickname', content: 'content', date: 'date' },
      {
        nickname: 'myNickname',
        content:
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentconte',
        date: 'date',
      },
      { nickname: 'nickname', content: 'content', date: 'date' },
      { nickname: 'nickname', content: 'content', date: 'date' },
    ];
    setChatContentList(data);
  };

  useEffect(() => {
    getChatByRoomId(roomId);
  }, [roomId]);
  return (
    <ChatModalLayout ref={modalBackground} onClick={modalBackgroundClickHandler}>
      <ChatRoomContainer>
        <ImageWrapper>
          <img src='/src/public/images/elephant.png' alt='profile' width={68} height={68} />
        </ImageWrapper>
        <ChatContents chatContentList={chatContentList} />
        <InputWrapper>
          <Input
            type='text'
            // status={'search'}
            placeholder='채팅을 입력해주세요.'
            image={'/src/public/images/elephant.png'}
          />
        </InputWrapper>
      </ChatRoomContainer>
    </ChatModalLayout>
  );
};

export default ChatModal;

const ChatModalLayout = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;

  background: rgba(0, 0, 0, 0.5);
`;
const ChatRoomContainer = styled.div`
  width: 100%;
  height: calc(100% - 8rem);
  position: absolute;
  top: 8rem;
  display: flex;
  flex-direction: column;
  padding: 6rem 3rem 3rem 3rem;
  background: #fff;
  border-radius: 2rem 2rem 0 0;
`;
const ImageWrapper = styled.div`
  position: absolute;
  left: 3rem;
  bottom: calc(100% - 4rem);
  background: #f3f2f2;
  border-radius: 68px;
  box-shadow: 0 0.4rem 1.6rem 0 rgba(100, 100, 100, 0.1);
`;
