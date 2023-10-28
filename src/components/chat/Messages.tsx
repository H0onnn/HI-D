import React from 'react';
import styled from 'styled-components';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import { MessageInterface } from '@/types/chat';

type Props = {
  messageList: MessageInterface[];
};
const Messages = ({ messageList }: Props) => {
  const myNickname = 'myNickname'; // 전역변수에서 가져온다.
  const isMyMessage = (sender: string) => sender === myNickname;

  return (
    <MessageListLayout>
      {messageList.map((message) =>
        isMyMessage(message.sender) ? (
          <MyMessage key={message.chatMessageId} {...message} />
        ) : (
          <YourMessage key={message.chatMessageId} {...message} />
        ),
      )}
    </MessageListLayout>
  );
};
export default Messages;

const MessageListLayout = styled.div`
  width: 100%;
  height: 100%;
  gap: 0.8rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
