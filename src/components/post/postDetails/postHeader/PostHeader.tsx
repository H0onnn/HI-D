import React from 'react';
import usePostActionState from '@/hooks/usePostActionState';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import styled from 'styled-components';
import PostTitle from './PostTitle';
import PostActions from './actions/PostActions';

interface PostHeaderInterface {
  title: string;
  postStates: ReturnType<typeof usePostActionState>;
  postActionHandlers: ReturnType<typeof usePostActionHandlers>;
  userId?: number;
  writerId: number;
  postId: number;
}

const PostHeader = ({
  title,
  postStates,
  postActionHandlers,
  userId,
  writerId,
  postId,
}: PostHeaderInterface) => {
  return (
    <PostHeaderLayout>
      <PostTitle title={title} />
      <PostActions
        userId={userId}
        writerId={writerId}
        postStates={postStates}
        postActionHandlers={postActionHandlers}
        postId={postId}
      />
    </PostHeaderLayout>
  );
};

export default PostHeader;

const PostHeaderLayout = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
