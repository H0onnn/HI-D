import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import useObserver from '../../hooks/useObserver';
import { PostListProps } from '../../types/post';
import FreePost from './FreePost';
import FreePostMedium from './FreePostMedium';

const FreePostList = ({ postList, nextPageHandler, keyword }: PostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPostListPage = location.pathname.includes(LINK.POST);
  const infinityRef = useObserver(() => nextPageHandler());

  return (
    <>
      {postList.map((post) =>
        isPostListPage ? (
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
      <div ref={infinityRef} style={{ height: '1px' }}></div>
    </>
  );
};
export default FreePostList;
