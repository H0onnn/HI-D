import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import HelpPost from '../../components/post/HelpPost';
import useObserver from '../../hooks/useObserver';
import { PostListProps } from '../../types/post';
import HelpPostMedium from './HelpPostMedium';

const HelpPostList = ({ postList, pageStatus, nextPageHandler, keyword }: PostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const infinityRef = useObserver(() => nextPageHandler());
  // TODO: loading 추가

  return (
    <>
      {postList.map((post) =>
        location.pathname.includes(LINK.POST) ? (
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
