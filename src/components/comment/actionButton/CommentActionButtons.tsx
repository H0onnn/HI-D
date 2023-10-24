import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface CommentActionButtonsInterface {
  text: string;
  onClickHandler: () => void;
}

const CommentActionButtons = ({ text, onClickHandler }: CommentActionButtonsInterface) => {
  return (
    <CommentActionButtonsLayout onClick={onClickHandler}>
      <ButtonText>{text}</ButtonText>
    </CommentActionButtonsLayout>
  );
};

export default CommentActionButtons;

const CommentActionButtonsLayout = styled.div`
  width: 3rem;
  height: 2rem;
  padding: 0.2rem 0.6rem 0.2rem 0.6rem;
  border-radius: 900px;
  background-color: ${colors.gray2};
`;

const ButtonText = styled.p`
  font-size: 10px;
  line-height: 15px;
  color: ${colors.gray5};
`;
