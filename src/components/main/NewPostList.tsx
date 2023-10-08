import React from 'react';
import { Post } from '../../types/post';
import styled from 'styled-components';
import NewPost from './NewPost';

const NewPostList = ({ postList }: { postList: Post[] }) => {
  return (
    <Layout>
      <PostListLayout>
        {postList.map((post, idx) => (
          <NewPost post={post} key={idx} />
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
  gap: 1.2rem;
  padding: 0 2rem 2rem 2rem;
  overflow-x: scroll;
  /* Firefox를 위한 스크롤바 스타일 */
  scrollbar-width: thin;
  scrollbar-color: #c5c5c5 #d9d9d9;
  /* WebKit 기반 브라우저(Chrome, Safari)를 위한 스크롤바 스타일 */
  &::-webkit-scrollbar {
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a5adff;
    border-radius: 9rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
    border-radius: 9rem;
    margin: 0 2rem;
  }
`;
