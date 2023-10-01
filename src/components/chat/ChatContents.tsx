import React from 'react';
import styled from 'styled-components';
import MyChat from './MyChat';
import YourChat from './YourChat';
import { ChatInterface } from '../../types/chat';

type Props = {
  chatContentList: ChatInterface[];
};
const ChatContents = ({ chatContentList }: Props) => {
  const myId = 'myNickname'; // 전역변수에서 가져온다.
  return (
    <ChatContentsLayout>
      {chatContentList.map((chatContent) => (
        <ChatItemBox key={chatContent.chatId}>
          {chatContent.nickname === myId ? (
            <MyChat chatContent={chatContent} />
          ) : (
            <YourChat chatContent={chatContent} />
          )}
        </ChatItemBox>
      ))}
    </ChatContentsLayout>
  );
};
export default ChatContents;

const ChatContentsLayout = styled.div`
  width: 100%;
  gap: 0.8rem;
  margin: 0 0 4rem 0;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const ChatItemBox = styled.div``;
