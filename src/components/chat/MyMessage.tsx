import React from 'react';
import styled from 'styled-components';
import { MessageInterface } from '@/types/chat';
import { colors } from '@/constants/colors';
import MessageTime from './MessageTime';
import { defaultMessageLayout, defaultMessageTextLayout } from '@/styles/chat';

const MyMessage = ({ content, createAt }: MessageInterface) => {
  return (
    <MessageLayout>
      <MessageText>{content}</MessageText>
      <MessageTime createAt={createAt} />
    </MessageLayout>
  );
};
export default MyMessage;

const MessageLayout = styled.div`
  ${defaultMessageLayout}
  align-items: flex-end;
`;
export const MessageText = styled.div`
  ${defaultMessageTextLayout}
  border-radius: 16px 0px 16px 16px;
  background: ${colors.primary};
  color: ${colors.white};
`;
