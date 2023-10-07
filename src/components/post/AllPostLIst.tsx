import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import useObserver from '../../hooks/useObserver';
import { PostListProps, Post } from '../../types/post';
import FreePost from './FreePost';
import HelpPost from './HelpPost';

const AllPostList = ({
  postList,
  pageStatus,
  nextPageHandler,
  postImgSize = 'small',
  keyword,
}: PostListProps) => {
  const navigate = useNavigate();
  const infinityRef = useObserver(() => nextPageHandler());

  const postByCategory = (post: Post) => {
    switch (post.category) {
      case 'help':
        return (
          <HelpPost
            keyword={keyword}
            imageSize={postImgSize}
            post={post}
            onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
          />
        );
      case 'free':
        return (
          <FreePost
            keyword={keyword}
            imageSize={postImgSize}
            post={post}
            onClick={() => navigate(`${LINK.POST}/${post.postId}`)}
          />
        );
      default:
        return;
    }
  };

  return (
    <>
      {postList.map((post, index) => (
        <React.Fragment key={index}>{postByCategory(post)}</React.Fragment>
      ))}
      {pageStatus.isNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
    </>
  );
};
export default AllPostList;
