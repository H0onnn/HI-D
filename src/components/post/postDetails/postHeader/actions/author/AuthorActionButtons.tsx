import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import EDIT_ICON from '@/public/images/ui/post_edit_icon.svg';
import DELETE_ICON from '@/public/images/ui/post_delete_icon.svg';

interface AuthorActionButtonsInterface {
  postId: number;
  deletePostHandler: (postId: number) => Promise<void>;
}

const AuthorActionButtons = ({ postId, deletePostHandler }: AuthorActionButtonsInterface) => {
  return (
    <ActionButtonsContainer>
      <ActionButton>
        <ButtonIcon src={EDIT_ICON} alt='post_edit_icon' />
        <ButtonText>수정하기</ButtonText>
      </ActionButton>
      <LineDiv />
      <ActionButton onClick={() => deletePostHandler(postId)}>
        <ButtonIcon src={DELETE_ICON} alt='post_delete_icon' />
        <ButtonText>삭제하기</ButtonText>
      </ActionButton>
    </ActionButtonsContainer>
  );
};

export default AuthorActionButtons;

const ActionButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
`;

const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${colors.gray5};
`;

const LineDiv = styled.div`
  width: 12rem;
  height: 0.1rem;
  background-color: ${colors.gray4};
`;
