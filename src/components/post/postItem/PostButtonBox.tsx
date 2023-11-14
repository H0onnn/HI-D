import React from 'react';
import { colors } from '@/constants/colors';
import styled, { css } from 'styled-components';
import { useLocation } from 'react-router-dom';
import IconButton from '@/components/public/IconButton';
import BOOKMARK_NONE from '@/public/images/ui/bookmark_none.svg';
import BOOKMARK_ACTIVE from '@/public/images/ui/bookmark_active.svg';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import { PostingDataInterface } from '@/types/posting';

const PostButtonBox = ({
  postId,
  isBookMarked,
  postData,
}: {
  postId: number;
  isBookMarked: boolean;
  postData: PostingDataInterface;
}) => {
  const location = useLocation();
  const isMyBookmark = location.pathname.includes('/bookmark');
  const { bookmarkPost, editPost, deletePostHandler } = usePostActionHandlers();

  return (
    <ButtonContainer>
      {isMyBookmark ? (
        <ButtonWrapper>
          <IconButton
            iconSrc={BOOKMARK_NONE}
            activeIconSrc={BOOKMARK_ACTIVE}
            isActive={isBookMarked}
            bookmarkPostHandler={bookmarkPost}
            alt='bookmark_icon'
            postId={postId}
          />
        </ButtonWrapper>
      ) : (
        <>
          <PatchButton onClick={() => editPost(postData, postId)}>수정</PatchButton>
          <DeleteButton onClick={() => deletePostHandler(postId)}>삭제</DeleteButton>
        </>
      )}
    </ButtonContainer>
  );
};

export default PostButtonBox;

const defaultButtonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 2.6rem;
  border-radius: 0.8rem;
  z-index: 1;
  color: ${colors.gray6};
`;
const PatchButton = styled.div`
  ${defaultButtonStyles};
  background-color: ${colors.pastel};
`;
const DeleteButton = styled.div`
  ${defaultButtonStyles};
  background-color: ${colors.gray1};
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  right: 1rem;
  width: 2.6rem;
`;
