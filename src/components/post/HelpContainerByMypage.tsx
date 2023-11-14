import React from 'react';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import HelpPost from './HelpPost';
import LoadingContent from '../public/LoadingContent';
import { LINK } from '@/constants/links';
import { useLocation, useNavigate } from 'react-router-dom';
import useObserver from '@/hooks/useObserver';
import ErrorContent from '../public/ErrorContent';
import useMyPosts from '@/hooks/useMyPosts';

const HelpContainerByMypage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const requestLocation = location.pathname.includes(LINK.MY_BOOKMARKS) ? 'bookmarks' : 'posts';
  const { data, moreDataHandler, isFetching } = useMyPosts({
    location: requestLocation,
    category: 'NEED_HELP',
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
            <HelpPost
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

export default HelpContainerByMypage;
