import React from 'react';
import styled from 'styled-components';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import { MessageInterface } from '@/types/chat';

type Props = {
  messageList: MessageInterface[];
};
const Messages = ({ messageList }: Props) => {
  const myId = 'myNickname'; // 전역변수에서 가져온다.

  const chatItem = (message: MessageInterface) => {
    if (message.sender === myId) {
      return <MyMessage {...message} />;
    } else {
      return <YourMessage {...message} />;
    }
  };
  return <MessagesLayout>{messageList.map((message) => chatItem(message))}</MessagesLayout>;
};
export default Messages;

const MessagesLayout = styled.div`
  width: 100%;
  height: 100%;
  gap: 0.8rem;
  margin: 0 0 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
