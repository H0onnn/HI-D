import React from 'react';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import useMyPosts from '@/hooks/useMyPosts';
import useObserver from '@/hooks/useObserver';
import ErrorContent from '../public/ErrorContent';
import FreePost from './FreePost';
import LoadingContent from '../public/LoadingContent';

const FreeContainerByMypage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const requestLocation = location.pathname.includes(LINK.MY_BOOKMARKS) ? 'bookmarks' : 'posts';
  const { data, moreDataHandler, isFetching } = useMyPosts({
    location: requestLocation,
    category: 'FREE',
  });
  const loadMoreRef = useObserver(() => moreDataHandler());

  if (data?.pages[0].size === 0)
    return (
      <PostListLayout>
        <ErrorContent />
      </PostListLayout>
    );

  return (
    <PostListLayout>
      <PostListWrapper>
        {data?.pages.map((page) =>
          page.dataList.map((post) => (
            <FreePost
              post={post}
              key={post.postId}
              onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
            />
          )),
        )}
        {isFetching ? <LoadingContent /> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
      </PostListWrapper>
    </PostListLayout>
  );
};

export default FreeContainerByMypage;
