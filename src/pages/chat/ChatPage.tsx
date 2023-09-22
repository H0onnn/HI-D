import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatItem from '../../components/chat/ChatItem';
import ChatModal from '../../components/chat/ChatModal';

const ChatPage = () => {
  const [chatList, setChatList] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    // fetch
    setChatList(['톡톡1', '톡톡2', '톡톡3']);
  }, []);

  return (
    <ChatPageLayout>
      <Title>과끼리 톡톡</Title>
      <ChatListText>참여 중인 톡톡</ChatListText>
      <ChatList>
        {chatList.map((chat, index) => (
          <ChatItem key={index} chat={chat} onClick={() => setModal(true)} />
        ))}
      </ChatList>
      {modal && <ChatModal setModal={setModal} />}
    </ChatPageLayout>
  );
};

export default ChatPage;

const ChatPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;

  color: #555353;
  text-align: center;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const ChatListText = styled.div`
  padding: 25px 0 12px 0;

  color: #696969;
  font-family: SUIT;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 27px */
`;
const ChatList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 0.8rem;
`;
