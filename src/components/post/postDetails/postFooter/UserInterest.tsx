import React, { useState } from 'react';
import styled from 'styled-components';
import UserInterestIcon from './UserInterestIcon';
import LIKE_NONE from '@/public/images/ui/like_none.svg';
import LIKE_FILL from '@/public/images/ui/like_fill.svg';
import COMMENT_NONE from '@/public/images/ui/comment_none.svg';
import COMMENT_FILL from '@/public/images/ui/comment_fill.svg';
import VIEW from '@/public/images/ui/veiwcount.svg';

interface UserInterestInterface {
  likeCount: number;
  commentCount: number;
  viewCount: number;
}

const UserInterest = ({ likeCount, commentCount, viewCount }: UserInterestInterface) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isCommented, setIsCommented] = useState<boolean>(false);

  const likeClickHandler = () => {
    setIsLiked((prev) => !prev);
  };

  const commentClickHandler = () => {
    setIsCommented((prev) => !prev);
  };

  const INTERESTS = [
    { icon: isLiked ? LIKE_FILL : LIKE_NONE, value: likeCount },
    { icon: isCommented ? COMMENT_FILL : COMMENT_NONE, value: commentCount },
    { icon: VIEW, value: viewCount },
  ];

  return (
    <UserInterestLayout>
      {INTERESTS.map((interest, index) => (
        <UserInterestIcon
          key={index}
          icon={interest.icon}
          value={interest.value}
          onClick={index === 0 ? likeClickHandler : index === 1 ? commentClickHandler : undefined}
        />
      ))}
    </UserInterestLayout>
  );
};

export default UserInterest;

const UserInterestLayout = styled.div`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;
