import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

const MessageNickname = ({ nickname }: { nickname: string }) => {
  return <MessageNicknameLayout>{nickname}</MessageNicknameLayout>;
};
export default MessageNickname;

const MessageNicknameLayout = styled.div`
  color: ${colors.black};
  font-size: 14px;
  font-weight: 700;
`;
