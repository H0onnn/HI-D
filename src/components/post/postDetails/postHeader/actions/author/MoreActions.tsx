import React from 'react';
import useActionState from '@/hooks/useActionState';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import styled from 'styled-components';
import IconButton from '@/components/public/IconButton';
import MoreActionModal from '@/components/public/MoreActionModal';
import MoreActionButtons from '@/components/public/MoreActionButtons';
import BOOKMARK_NONE from '@/public/images/ui/bookmark_none.svg';
import BOOKMARK_ACTIVE from '@/public/images/ui/bookmark_active.svg';
import REPORT_ICON from '@/public/images/ui/report_icon.svg';
import MORE_ACTION from '@/public/images/ui/more_active.svg';
import { PostDetailInterface } from '@/types/post';
interface MoreActionsInterface {
  postStates: ReturnType<typeof useActionState>;
  postActionHandlers: ReturnType<typeof usePostActionHandlers>;
  postId: number;
  isBookMarked: boolean;
  postData: PostDetailInterface;
}

const MoreActions = ({
  postStates,
  postActionHandlers,
  postId,
  isBookMarked,
  postData,
}: MoreActionsInterface) => {
  const { isMoreActions, toggleMoreActions, toggleReport } = postStates;
  const { bookmarkPost, editPost, deletePostHandler, enterChatRoomHandler } = postActionHandlers;

  return (
    <MoreActionsLayout>
      <IconButton
        iconSrc={BOOKMARK_NONE}
        activeIconSrc={BOOKMARK_ACTIVE}
        isActive={isBookMarked}
        bookmarkPostHandler={bookmarkPost}
        alt='bookmark_icon'
        postId={postId}
      />
      {postData.isMine ? (
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
        <MoreActionModal setModalState={toggleMoreActions}>
          <MoreActionButtons
            id={postId}
            type='POST'
            isOwnContent={postData.isMine}
            editHandler={() => editPost(postId)}
            deleteHandler={() => deletePostHandler(postId)}
            chatHandler={() => enterChatRoomHandler(postData.writer.memberId)}
          />
        </MoreActionModal>
      )}
    </MoreActionsLayout>
  );
};

export default MoreActions;

const MoreActionsLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  position: relative;
`;
