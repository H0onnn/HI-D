import React from 'react';
import styled from 'styled-components';
import { formatTimeAgo } from '../../utils/post';
import { MessageInterface } from '@/types/chat';
import { colors } from '@/constants/colors';

const YourMessage = ({ sender, content, createAt }: MessageInterface) => {
  return (
    <MessageLayout>
      <ChatNickname>{sender}</ChatNickname>
      <ChatText>{content}</ChatText>
      <ChatDate>{formatTimeAgo(createAt)}</ChatDate>
    </MessageLayout>
  );
};
export default YourMessage;

const MessageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;
const ChatNickname = styled.div`
  color: ${colors.black};
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
  background: ${colors.pastel};
  color: ${colors.black};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
const ChatDate = styled.div`
  color: ${colors.gray3};
  font-family: SUIT;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 15px */
`;
