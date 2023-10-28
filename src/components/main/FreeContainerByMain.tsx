import React, { useEffect, useState } from 'react';
import { FreePostTag, PostInterface, TagInterface } from '../../types/post';
import FreePostTagContainer from '../post/FreePostTag';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import FreePost from '../post/FreePost';
import MoreButton from './MoreButton';
import { getFreePostListByMain } from '@/services/main';
import { freePostTagList } from '@/constants/post';
import { PostListLayout, PostListWrapper, TagWrapper } from '@/styles/post';
import ErrorContent from '../public/ErrorContent';
import LoadingContent from '../public/LoadingContent';

const FreeContainerByMain = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [currentTag, setCurrentTag] = useState<TagInterface>(freePostTagList[0]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    const selectedTag: TagInterface =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
  };

  useEffect(() => {
    setLoading(true);
    setError(false);
    getFreePostListByMain(currentTag.en)
      .then((response) => {
        setPostList(response.dataList);
      })
      .catch(() => {
        setError(true);
      });
    setLoading(false);
  }, [currentTag]);

  const moreButtonClickHandler = () => {
    navigate(`${LINK.POST_FREE}`);
  };

  return (
    <PostListLayout>
      <TagWrapper>
        <FreePostTagContainer
          onClick={handleTagClick}
          currentTag={currentTag.name as FreePostTag}
        />
      </TagWrapper>
      <PostListWrapper>
        {loading && <LoadingContent />}
        {!loading && error && <ErrorContent />}
        {postList.map((post) => (
          <FreePost post={post} key={post.postId} />
        ))}
        <MoreButton onClick={moreButtonClickHandler} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default FreeContainerByMain;
