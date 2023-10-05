import React, { useState } from 'react';
// import styled from 'styled-components';
import ChatModal from '../../components/chat/ChatModal';
import PageHeader from '../../components/public/PageHeader';
import { PageLayout } from '../../styles/styles';
import MainComment from '../../components/auth/MainComment';
import { ChatModalStatusInterface } from '../../types/chat';
import ChatRoomList from '../../components/chat/ChatRoomList';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

const ChatPage = () => {
  const [{ isOpen, roomId }, setChatModal] = useState<ChatModalStatusInterface>({
    isOpen: false,
    roomId: 0,
  });
  const { lockScroll, openScroll } = useBodyScrollLock();

  const chatRoomClickHandler = (roomId: number) => {
    setChatModal({ isOpen: true, roomId: roomId });
    lockScroll();
  };

  return (
    <>
      <PageHeader title='과끼리 톡톡' />
      {/* PageLayoutWithNav 추가 혹은 수정여부 */}
      <PageLayout style={{ background: '#FBFBFB', paddingBottom: '6.5rem' }}>
        <MainComment style={{ fontSize: '18px', color: '#696969' }} comment='참여 중인 톡톡' />
        <ChatRoomList chatRoomClick={chatRoomClickHandler} />
        {isOpen && (
          <ChatModal
            status={{ isOpen, roomId }}
            setChatModal={setChatModal}
            openScroll={openScroll}
          />
        )}
      </PageLayout>
    </>
  );
};

export default ChatPage;
