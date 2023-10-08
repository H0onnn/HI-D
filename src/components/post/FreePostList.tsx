import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import useObserver from '../../hooks/useObserver';
import { PostListProps } from '../../types/post';
import FreePost from './FreePost';

const FreePostList = ({
  postList,
  pageStatus,
  nextPageHandler,
  postImgSize = 'small',
  infiniteScroll = true,
  keyword,
}: PostListProps) => {
  const navigate = useNavigate();
  const infinityRef = useObserver(() => nextPageHandler());

  return (
    <>
      {postList.map((post, idx) => (
        <FreePost
          keyword={keyword}
          imageSize={postImgSize}
          post={post}
          key={idx}
          onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
        />
      ))}
      {pageStatus.isNext && infiniteScroll && (
        <div ref={infinityRef} style={{ height: '1px' }}></div>
      )}
    </>
  );
};
export default FreePostList;
