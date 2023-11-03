import React from 'react';
import useActionState from '@/hooks/useActionState';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import styled from 'styled-components';
import PostTitle from './PostTitle';
import MoreActions from '../../../public/MoreActions';
import { PostDetailInterface } from '@/types/post';

interface PostHeaderInterface {
  title: string;
  postStates: ReturnType<typeof useActionState>;
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
      <MoreActions
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
