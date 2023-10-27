import React from 'react';
import usePostActions from '@/hooks/usePostActions';
import styled from 'styled-components';
import IconButton from '@/components/public/IconButton';
import BOOKMARK_NONE from '@/public/images/ui/bookmark_none.svg';
import BOOKMARK_ACTIVE from '@/public/images/ui/bookmark_active.svg';
import REPORT_ICON from '@/public/images/ui/report_icon.svg';
import MORE_ACTION from '@/public/images/ui/more_active.svg';
interface PostActionsInterface {
  postActions: ReturnType<typeof usePostActions>;
  userId?: number;
  writerId: number;
}

const PostActions = ({ postActions, userId, writerId }: PostActionsInterface) => {
  const { isBookMarked, toggleBookmarkHandler, toggleReportHandler } = postActions;

  return (
    <PostActionsLayout>
      <IconButton
        iconSrc={BOOKMARK_NONE}
        activeIconSrc={BOOKMARK_ACTIVE}
        isActive={isBookMarked}
        onClickHandler={toggleBookmarkHandler}
        alt='bookmark_icon'
      />
      <IconButton
        iconSrc={userId === writerId ? MORE_ACTION : REPORT_ICON}
        onClickHandler={toggleReportHandler}
        alt='report_icon'
      />
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
`;
