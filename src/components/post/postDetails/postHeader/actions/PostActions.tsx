import React, { useState } from 'react';
import styled from 'styled-components';
import BookMarkButton from './BookMarkButton';
import ReportButton from './ReportButton';

const PostActions = () => {
  const [isBookMarked, setIsBookMarked] = useState<boolean>(false);

  const bookMarkClickHandler = () => {
    setIsBookMarked(!isBookMarked);
  };

  const reportClickHandler = () => {};

  return (
    <PostActionsLayout>
      <BookMarkButton isBookMarked={isBookMarked} bookMarkClickHandler={bookMarkClickHandler} />
      <ReportButton reportClickHandler={reportClickHandler} />
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
