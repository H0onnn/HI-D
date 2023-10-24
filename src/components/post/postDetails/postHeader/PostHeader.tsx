import React from 'react';
import usePostActions from '@/hooks/usePostActions';
import styled from 'styled-components';
import PostTitle from './PostTitle';
import PostActions from './actions/PostActions';

interface PostHeaderInterface {
  title: string;
  postActions: ReturnType<typeof usePostActions>;
}

const PostHeader = ({ title, postActions }: PostHeaderInterface) => {
  return (
    <PostHeaderLayout>
      <PostTitle title={title} />
      <PostActions postActions={postActions} />
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
