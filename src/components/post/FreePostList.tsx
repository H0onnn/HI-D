import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import useObserver from '../../hooks/useObserver';
import { PostListProps } from '../../types/post';
import FreePost from './FreePost';
import FreePostMedium from './FreePostMedium';

const FreePostList = ({ postList, pageStatus, nextPageHandler, keyword }: PostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const infinityRef = useObserver(() => nextPageHandler());
  // TODO: loading 추가

  return (
    <>
      {postList.map((post) =>
        location.pathname.includes(LINK.POST) ? (
          <FreePostMedium
            post={post}
            key={post.postId}
            onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
          />
        ) : (
          <FreePost
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
export default FreePostList;
