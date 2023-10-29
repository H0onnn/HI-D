import React from 'react';
import { colors } from '@/constants/colors';
import styled from 'styled-components';
import { formatChatTime } from '@/utils/post';

interface Props {
  createAt: string;
}
const MessageDate = ({ createAt }: Props) => {
  return <MessageDateLayout>{formatChatTime(createAt)}</MessageDateLayout>;
};
export default MessageDate;

const MessageDateLayout = styled.div`
  color: ${colors.gray3};
  font-size: 10px;
`;
