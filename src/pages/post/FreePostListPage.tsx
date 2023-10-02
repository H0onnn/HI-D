import React, { useEffect, useState } from 'react';
import { PageLayout } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { Post } from '../../types/post';
import PageHeader from '../../components/public/PageHeader';
import FreePost from '../../components/post/FreePost';

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
        <div>태그들</div>
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
