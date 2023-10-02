import React, { useEffect, useState } from 'react';
import { PageLayout } from '../../styles/styles';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { Post } from '../../types/post';
import PageHeader from '../../components/public/PageHeader';
import HelpPost from '../../components/post/HelpPost';

const HelpPostListPage = () => {
  const navigate = useNavigate();
  const [helpPostList, setHelpPostList] = useState<Post[]>([]);

  useEffect(() => {
    setHelpPostList([]);
  }, []);
  return (
    <>
      <PageHeader title='도움이 필요해요' />
      <PageLayout>
        {helpPostList.map((post, idx) => (
          <HelpPost
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

export default HelpPostListPage;
