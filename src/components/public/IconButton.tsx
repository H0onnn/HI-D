import React from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  iconSrc: string;
  isActive?: boolean;
  activeIconSrc?: string;
  onClickHandler?: () => void;
  bookmarkPostHandler?: (postId: number) => Promise<void>;
  alt?: string;
  postId?: number;
}

const IconButton = ({
  iconSrc,
  isActive = false,
  activeIconSrc,
  onClickHandler,
  alt = '',
  bookmarkPostHandler,
  postId,
}: IconButtonProps) => {
  const iconToDisplay = isActive && activeIconSrc ? activeIconSrc : iconSrc;

  const handleClick = () => {
    if (bookmarkPostHandler && postId) {
      bookmarkPostHandler(postId);
      return;
    }

    if (onClickHandler) {
      onClickHandler();
      return;
    }
  };

  return (
    <IconButtonLayout onClick={handleClick}>
      <IconImage src={iconToDisplay} alt={alt} />
    </IconButtonLayout>
  );
};

export default IconButton;

const IconButtonLayout = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
