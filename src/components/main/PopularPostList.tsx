import React, { useEffect, useState } from 'react';
import { Post } from '../../types/post';
import PopularPost from './PopularPost';
import styled from 'styled-components';

const PopularPostList = ({ postList }: { postList: Post[] }) => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setIdx(1);
  }, [idx]);
  return (
    <Layout>
      <PostListLayout>
        {postList.map((post, idx) => (
          <PopularPost post={post} key={idx} />
        ))}
      </PostListLayout>
      <div onClick={() => idx}>slider button</div>
    </Layout>
  );
};

export default PopularPostList;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostListLayout = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow: scroll;
`;
