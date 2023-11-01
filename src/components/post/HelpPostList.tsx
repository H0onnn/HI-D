import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import HelpPost from '../../components/post/HelpPost';
import useObserver from '../../hooks/useObserver';
import { PostListProps } from '../../types/post';
import HelpPostMedium from './HelpPostMedium';

const HelpPostList = ({ postList, nextPageHandler, keyword }: PostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPostListPage = location.pathname.includes(LINK.POST);
  const infinityRef = useObserver(() => nextPageHandler());

  return (
    <>
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
      <div ref={infinityRef} style={{ height: '1px' }}></div>
    </>
  );
};
export default HelpPostList;
