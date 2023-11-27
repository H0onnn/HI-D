import React from 'react';
import styled from 'styled-components';
import PageHeader from '../../components/public/PageHeader';
import { MainPageLayout } from '../../styles/styles';
import ChatRoomList from '../../components/chat/ChatRoomList';
import { colors } from '@/constants/colors';

const ChatPage = () => {
  return (
    <>
      <PageHeader title='채팅' isGoBack />
      <MainPageLayout>
        <MainTextContainer>
          <MainText>참여중인 채팅</MainText>
        </MainTextContainer>
        <ChatRoomList />
      </MainPageLayout>
    </>
  );
};

export default ChatPage;

const MainTextContainer = styled.div`
  display: flex;
  padding: 3.2rem 2.6rem 0.8rem 2.6rem;
`;

const MainText = styled.h1`
  color: ${colors.black};
  font-size: 18px;
  font-weight: 700;
`;
