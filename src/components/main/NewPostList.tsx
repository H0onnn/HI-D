import React from 'react';
import { PostInterface } from '../../types/post';
import styled from 'styled-components';
import NewPost from './NewPost';
import { colors } from '@/constants/colors';

const NewPostList = ({ postList }: { postList: PostInterface[] }) => {
  return (
    <Layout>
      <PostListLayout>
        {postList.map((post) => (
          <NewPost post={post} key={post.postId} />
        ))}
      </PostListLayout>
    </Layout>
  );
};

export default NewPostList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostListLayout = styled.div`
  display: flex;
  min-height: 18.5rem;
  max-height: 18.5rem;
  gap: 1.2rem;
  padding: 0 2rem 2rem 2rem;
  overflow-x: scroll;
  /* Firefox를 위한 스크롤바 스타일 */
  scrollbar-width: thin;
  scrollbar-color: ${colors.secondary} ${colors.white};
  /* WebKit 기반 브라우저(Chrome, Safari)를 위한 스크롤바 스타일 */
  &::-webkit-scrollbar {
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${colors.secondary};
    border-radius: 9rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.white};
    border-radius: 9rem;
    margin: 0 2rem;
  }
`;
