import React from 'react';
import usePostActions from '@/hooks/usePostActions';
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
  postActions: ReturnType<typeof usePostActions>;
}

const UserInterest = ({
  likeCount,
  commentCount,
  viewCount,
  postActions,
}: UserInterestInterface) => {
  const { isLiked, toggleLikeHandler } = postActions;

  const INTERESTS = [
    { icon: isLiked ? LIKE_FILL : LIKE_NONE, value: likeCount },
    { icon: commentCount !== 0 ? COMMENT_FILL : COMMENT_NONE, value: commentCount },
    { icon: VIEW, value: viewCount },
  ];

  return (
    <UserInterestLayout>
      {INTERESTS.map((interest, index) => (
        <UserInterestIcon
          key={index}
          icon={interest.icon}
          value={interest.value}
          onClick={index === 0 ? toggleLikeHandler : undefined}
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
