import React from 'react';
import styled from 'styled-components';
import PostTitle from './PostTitle';
import PostActions from './actions/PostActions';

interface PostHeaderInterface {
  title: string;
}

const PostHeader = ({ title }: PostHeaderInterface) => {
  return (
    <PostHeaderLayout>
      <PostTitle title={title} />
      <PostActions />
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
