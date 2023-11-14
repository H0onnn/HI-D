import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import useObserver from '../../hooks/useObserver';
import { FreePostListProps } from '../../types/post';
import FreePost from './FreePost';
import FreePostMedium from './FreePostMedium';
import useFreePosts from '@/hooks/useFreePosts';
import LoadingContent from '../public/LoadingContent';

const FreePostList = ({ tag, keyword }: FreePostListProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPostListPage = location.pathname.includes(LINK.POST);
  const { data, moreDataHandler, isFetching } = useFreePosts({ tag, keyword });
  const loadMoreRef = useObserver(() => moreDataHandler());

  return (
    <>
      {data?.pages.map((page) =>
        page.dataList.map((post) =>
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
        ),
      )}
      {isFetching ? <LoadingContent /> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
    </>
  );
};
export default FreePostList;
