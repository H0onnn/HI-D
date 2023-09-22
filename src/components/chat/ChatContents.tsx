import React from 'react';
import styled from 'styled-components';
import MyChat from './MyChat';
import YourChat from './YourChat';

export default function ChatContents() {
  const chatContents = [
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
      content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentconte',
      date: 'date',
    },
    { nickname: 'nickname', content: 'content', date: 'date' },
    { nickname: 'nickname', content: 'content', date: 'date' },
  ];
  const myNickname = 'myNickname';
  return (
    <ChatContentsLayout>
      {chatContents.map((chatContent) => (
        <>
          {chatContent.nickname === myNickname ? (
            <MyChat chatContent={chatContent} />
          ) : (
            <YourChat chatContent={chatContent} />
          )}
        </>
      ))}
    </ChatContentsLayout>
  );
}
const ChatContentsLayout = styled.div`
  width: 100%;
  gap: 8px;
  margin: 0 0 40px 0;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;
