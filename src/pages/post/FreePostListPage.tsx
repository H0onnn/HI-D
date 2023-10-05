import React, { useEffect, useState } from 'react';
import { PageLayout } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { FreePostTag, Post } from '../../types/post';
import PageHeader from '../../components/public/PageHeader';
import FreePost from '../../components/post/FreePost';
import styled from 'styled-components';

const FreePostListPage = () => {
  const navigate = useNavigate();
  const [freePostList, setFreePostList] = useState<Post[]>([]);

  useEffect(() => {
    setFreePostList([]);
  }, []);
  return (
    <>
      <PageHeader title='자유게시판' />
      <PageLayout>
        {Object.values(FreePostTag).map((tag, idx) => (
          <TagBox key={idx}>{tag}</TagBox>
        ))}
        {freePostList.map((post, idx) => (
          <FreePost
            imageSize='medium'
            post={post}
            key={idx}
            onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
          />
        ))}
      </PageLayout>
    </>
  );
};

export default FreePostListPage;

const TagBox = styled.div`
  width: 100%;
  padding: 0.6rem 1.2rem;
  border-radius: 90rem;
  background: #f9f9f9;
  text-align: center;
`;
