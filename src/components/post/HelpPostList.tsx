import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import HelpPost from '../../components/post/HelpPost';
import useObserver from '../../hooks/useObserver';
import { PostListProps } from '../../types/post';
import HelpPostMedium from './HelpPostMedium';
import ErrorContent from '../public/ErrorContent';
import LoadingContent from '../public/LoadingContent';

const HelpPostList = ({ postList, pageStatus, nextPageHandler, keyword }: PostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPostListPage = location.pathname.includes(LINK.POST);
  const infinityRef = useObserver(() => nextPageHandler());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <LoadingContent />}
      {!loading && error && <ErrorContent />}
      {postList.map((post) =>
        isPostListPage ? (
          <HelpPostMedium
            post={post}
            key={post.postId}
            onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
          />
        ) : (
          <HelpPost
            keyword={keyword}
            post={post}
            key={post.postId}
            onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
          />
        ),
      )}
      {pageStatus.hasNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
    </>
  );
};
export default HelpPostList;
