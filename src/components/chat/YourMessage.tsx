import React from 'react';
import styled from 'styled-components';
import { MessageInterface } from '@/types/chat';
import { colors } from '@/constants/colors';
import { defaultMessageLayout, defaultMessageTextLayout } from '@/styles/chat';
import MessageTime from './MessageTime';
import MessageNickname from './MessageNickname';

const YourMessage = ({ sender, content, createAt, read }: MessageInterface) => {
  return (
    <MessageLayout>
      <MessageNickname nickname={sender} />
      <MessageText>{content}</MessageText>
      <MessageFooter>
        {!read && <MessageUnRead>1</MessageUnRead>}
        <MessageTime createAt={createAt} />
      </MessageFooter>
    </MessageLayout>
  );
};
export default YourMessage;

const MessageLayout = styled.div`
  ${defaultMessageLayout}
  align-items: flex-start;
`;
const MessageText = styled.div`
  ${defaultMessageTextLayout}
  border-radius: 0px 16px 16px 16px;
  background: ${colors.pastel};
  color: ${colors.black};
`;

const MessageUnRead = styled.div`
  color: ${colors.primary};
`;
const MessageFooter = styled.div`
  display: flex;
  gap: 0.6rem;
`;
