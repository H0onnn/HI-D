import React from 'react';
import styled from 'styled-components';
import { formatTimeAgo } from '../../utils/post';
import { ChatInterface } from '@/types/chat';

type Props = { chatContent: ChatInterface };

const YourChat = ({ chatContent }: Props) => {
  const { content, createdAt, nickname } = chatContent;

  return (
    <YourChatLayout>
      <ChatNickname>{nickname}</ChatNickname>
      <ChatText>{content}</ChatText>
      <ChatDate>{formatTimeAgo(createdAt)}</ChatDate>
    </YourChatLayout>
  );
};
export default YourChat;

const YourChatLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const ChatNickname = styled.div`
  color: #383434;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
`;
const ChatText = styled.div`
  max-width: 100%;
  word-wrap: break-word;
  padding: 10px 16px;
  gap: 10px;

  border-radius: 0px 16px 16px 16px;
  background: #f8f8f8;

  color: #383434;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
const ChatDate = styled.div`
  color: #8f8f8f;
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;
