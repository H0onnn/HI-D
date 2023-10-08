import React, { useState } from 'react';
import styled from 'styled-components';
import ChatModal from '../../components/chat/ChatModal';
import PageHeader from '../../components/public/PageHeader';
import { MainPageLayout } from '../../styles/styles';
// import MainComment from '../../components/auth/MainComment';
import { ChatModalStatusInterface } from '../../types/chat';
import ChatRoomList from '../../components/chat/ChatRoomList';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const ChatPage = () => {
  const { lockScroll } = useBodyScrollLock();
  const [{ isOpen, roomId }, setChatModal] = useState<ChatModalStatusInterface>({
    isOpen: false,
    roomId: 0,
  });

  const openChatModalHandler = (roomId: number) => {
    setChatModal({ isOpen: true, roomId: roomId });
    lockScroll();
  };

  return (
    <>
      <PageHeader title='과끼리 톡톡' />
      <MainPageLayout>
        <MainTextContainer>
          <MainText>참여 중인 톡톡</MainText>
        </MainTextContainer>
        <ChatRoomList chatRoomClick={openChatModalHandler} />
        {isOpen && <ChatModal status={{ isOpen, roomId }} setChatModal={setChatModal} />}
      </MainPageLayout>
    </>
  );
};

export default ChatPage;

const MainTextContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 0.8rem 2.6rem;
`;

const MainText = styled.h1`
  color: #555353;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
