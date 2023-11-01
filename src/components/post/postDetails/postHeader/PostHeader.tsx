import React from 'react';
import usePostActionState from '@/hooks/usePostActionState';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import styled from 'styled-components';
import PostTitle from './PostTitle';
import PostActions from './actions/PostActions';
import { PostDetailInterface } from '@/types/post';

interface PostHeaderInterface {
  title: string;
  postStates: ReturnType<typeof usePostActionState>;
  postActionHandlers: ReturnType<typeof usePostActionHandlers>;
  postId: number;
  isBookmarked: boolean;
  postData: PostDetailInterface;
}

const PostHeader = ({
  title,
  postStates,
  postActionHandlers,
  postId,
  isBookmarked,
  postData,
}: PostHeaderInterface) => {
  return (
    <PostHeaderLayout>
      <PostTitle title={title} />
      <PostActions
        postStates={postStates}
        postActionHandlers={postActionHandlers}
        postId={postId}
        isBookMarked={isBookmarked}
        postData={postData}
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
