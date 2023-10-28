import React from 'react';
import styled from 'styled-components';
import { MessageInterface } from '@/types/chat';
import { colors } from '@/constants/colors';
import { defaultMessageLayout, defaultMessageTextLayout } from '@/styles/chat';
import MessageTime from './MessageTime';
import MessageNickname from './MessageNickname';

const YourMessage = ({ sender, content, createAt }: MessageInterface) => {
  return (
    <MessageLayout>
      <MessageNickname nickname={sender} />
      <MessageText>{content}</MessageText>
      <MessageTime createAt={createAt} />
    </MessageLayout>
  );
};
export default YourMessage;

export const MessageLayout = styled.div`
  ${defaultMessageLayout}
  align-items: flex-start;
`;
const MessageText = styled.div`
  ${defaultMessageTextLayout}
  border-radius: 0px 16px 16px 16px;
  background: ${colors.pastel};
  color: ${colors.black};
`;
