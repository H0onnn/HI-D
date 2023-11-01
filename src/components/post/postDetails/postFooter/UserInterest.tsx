import React from 'react';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import styled from 'styled-components';
import UserInterestIcon from './UserInterestIcon';
import LIKE_NONE from '@/public/images/ui/like_none.svg';
import LIKE_FILL from '@/public/images/ui/like_fill.svg';
import COMMENT_NONE from '@/public/images/ui/comment_none.svg';
import COMMENT_FILL from '@/public/images/ui/comment_fill.svg';
import VIEW from '@/public/images/ui/veiwcount.svg';

interface UserInterestInterface {
  postId: number;
  likeCount: number;
  commentCount: number;
  viewCount: number;
  isRecommended: boolean;
  postActionHandlers: ReturnType<typeof usePostActionHandlers>;
}

const UserInterest = ({
  postId,
  likeCount,
  commentCount,
  viewCount,
  isRecommended,
  postActionHandlers,
}: UserInterestInterface) => {
  const { likePost } = postActionHandlers;

  const INTERESTS = [
    { icon: isRecommended ? LIKE_FILL : LIKE_NONE, value: likeCount },
    { icon: commentCount !== 0 ? COMMENT_FILL : COMMENT_NONE, value: commentCount },
    { icon: VIEW, value: viewCount },
  ];

  return (
    <UserInterestLayout>
      {INTERESTS.map((interest, index) => (
        <UserInterestIcon
          postId={postId}
          key={index}
          icon={interest.icon}
          value={interest.value}
          likePostHandler={index === 0 ? likePost : () => Promise.resolve()}
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
