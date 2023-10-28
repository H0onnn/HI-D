import React from 'react';
import styled from 'styled-components';
import ChatModal from '../../components/chat/ChatModal';
import PageHeader from '../../components/public/PageHeader';
import { MainPageLayout } from '../../styles/styles';
import ChatRoomList from '../../components/chat/ChatRoomList';
import { colors } from '@/constants/colors';
import useModalStore from '@/store/modalStore';

const ChatPage = () => {
  const {
    isOpen,
    info: { type },
  } = useModalStore();
  const modalOpen = isOpen && type === 'page';

  return (
    <>
      <PageHeader title='과끼리 톡톡' />
      <MainPageLayout>
        <MainTextContainer>
          <MainText>참여 중인 톡톡</MainText>
        </MainTextContainer>
        <ChatRoomList />
        {modalOpen && <ChatModal />}
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
