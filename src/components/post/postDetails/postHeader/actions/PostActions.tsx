import React, { useState } from 'react';
import styled from 'styled-components';
import IconButton from '@/components/public/IconButton';
import BOOKMARK_NONE from '@/public/images/ui/bookmark_none.svg';
import BOOKMARK_ACTIVE from '@/public/images/ui/bookmark_active.svg';
import REPORT_ICON from '@/public/images/ui/report_icon.svg';

const PostActions = () => {
  const [isBookMarked, setIsBookMarked] = useState<boolean>(false);

  const bookMarkClickHandler = () => {
    setIsBookMarked(!isBookMarked);
  };

  const reportClickHandler = () => {};

  return (
    <PostActionsLayout>
      <IconButton
        iconSrc={BOOKMARK_NONE}
        activeIconSrc={BOOKMARK_ACTIVE}
        isActive={isBookMarked}
        onClickHandler={bookMarkClickHandler}
        alt='bookmark_icon'
      />
      <IconButton iconSrc={REPORT_ICON} onClickHandler={reportClickHandler} alt='report_icon' />
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
