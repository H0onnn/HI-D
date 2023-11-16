import React from 'react';
import MyMessage from './MyMessage';
import YourMessage from './YourMessage';
import { MessageInterface } from '@/types/chat';
import useUser from '@/hooks/useUser';

type Props = {
  messageList: MessageInterface[];
};
const Messages = ({ messageList }: Props) => {
  const { user } = useUser();
  const isMyMessage = (sender: string) => sender === user?.nickname;

  return (
    <>
      {messageList.map((message) =>
        message.type === 'NORMAL' ? (
          isMyMessage(message.sender) ? (
            <MyMessage key={message.chatMessageId} {...message} />
          ) : (
            <YourMessage key={message.chatMessageId} {...message} />
          )
        ) : null,
      )}
    </>
  );
};
export default Messages;
