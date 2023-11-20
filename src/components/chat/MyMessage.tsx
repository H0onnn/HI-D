import React from 'react';
import styled from 'styled-components';
import { MessageInterface } from '@/types/chat';
import { colors } from '@/constants/colors';
import MessageTime from './MessageTime';
import { defaultMessageLayout, defaultMessageTextLayout } from '@/styles/chat';

const MyMessage = ({ content, createAt, read }: MessageInterface) => {
  return (
    <MessageLayout>
      <MessageText>{content}</MessageText>
      <MessageFooter>
        {!read && <MessageUnRead>1</MessageUnRead>}
        <MessageTime createAt={createAt} />
      </MessageFooter>
    </MessageLayout>
  );
};
export default MyMessage;

const MessageLayout = styled.div`
  ${defaultMessageLayout}
  align-items: flex-end;
  padding-left: 2rem;
`;

const MessageText = styled.div`
  ${defaultMessageTextLayout}
  border-radius: 16px 0px 16px 16px;
  background: ${colors.primary};
  color: ${colors.white};
`;

const MessageUnRead = styled.div`
  color: ${colors.primary};
`;
const MessageFooter = styled.div`
  display: flex;
  gap: 0.6rem;
`;
