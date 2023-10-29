import React from 'react';
import usePostActionState from '@/hooks/usePostActionState';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import styled from 'styled-components';
import IconButton from '@/components/public/IconButton';
import AuthorActionModal from './author/AuthorActionModal';
import AuthorActionButtons from './author/AuthorActionButtons';
import BOOKMARK_NONE from '@/public/images/ui/bookmark_none.svg';
import BOOKMARK_ACTIVE from '@/public/images/ui/bookmark_active.svg';
import REPORT_ICON from '@/public/images/ui/report_icon.svg';
import MORE_ACTION from '@/public/images/ui/more_active.svg';
interface PostActionsInterface {
  postStates: ReturnType<typeof usePostActionState>;
  postActionHandlers: ReturnType<typeof usePostActionHandlers>;
  userId?: number;
  writerId: number;
  postId: number;
}

const PostActions = ({
  postStates,
  postActionHandlers,
  userId,
  writerId,
  postId,
}: PostActionsInterface) => {
  const { isBookMarked, isMoreActions, toggleMoreActions, toggleReport } = postStates;
  const { bookmarkPost, deletePost } = postActionHandlers;

  return (
    <PostActionsLayout>
      <IconButton
        iconSrc={BOOKMARK_NONE}
        activeIconSrc={BOOKMARK_ACTIVE}
        isActive={isBookMarked}
        bookmarkPostHandler={bookmarkPost}
        alt='bookmark_icon'
        postId={postId}
      />
      {userId === writerId ? (
        <>
          <IconButton
            iconSrc={MORE_ACTION}
            onClickHandler={toggleMoreActions}
            alt='author_actions_icon'
          />
        </>
      ) : (
        <IconButton iconSrc={REPORT_ICON} onClickHandler={toggleReport} alt='more_or_report_icon' />
      )}
      {isMoreActions && (
        <AuthorActionModal>
          <AuthorActionButtons postId={postId} deletePostHandler={deletePost} />
        </AuthorActionModal>
      )}
    </PostActionsLayout>
  );
};

export default PostActions;

const PostActionsLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: relative;
`;
