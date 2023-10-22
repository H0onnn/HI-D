import React from 'react';
import styled from 'styled-components';
import BOOKMARK_NONE from '@/public/images/ui/bookmark_none.svg';
import BOOKMARK_ACTIVE from '@/public/images/ui/bookmark_active.svg';

interface BookMarkButtonInterface {
  isBookMarked: boolean;
  bookMarkClickHandler: () => void;
}

const BookMarkButton = ({ isBookMarked, bookMarkClickHandler }: BookMarkButtonInterface) => {
  return (
    <BookMarkButtonLayout onClick={bookMarkClickHandler}>
      <BookMarkButtonIcon src={isBookMarked ? BOOKMARK_ACTIVE : BOOKMARK_NONE} />
    </BookMarkButtonLayout>
  );
};

export default BookMarkButton;

const BookMarkButtonLayout = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  overflow: hidden;
`;

const BookMarkButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
