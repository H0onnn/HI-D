import React, { useEffect, useState } from 'react';
import { FreePostTag, TagInterface } from '../../types/post';
import FreePostTagContainer from '../post/FreePostTag';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import FreePost from '../post/FreePost';
import MoreButton from './MoreButton';
import { freePostTagList } from '@/constants/post';
import { PostListLayout, PostListWrapper, TagWrapper } from '@/styles/post';
import useMainPosts from '@/hooks/useMainPosts';

const FreeContainerByMain = () => {
  const navigate = useNavigate();
  const [currentTag, setCurrentTag] = useState<TagInterface>(freePostTagList[0]);
  const { freePosts, refetchFreePosts } = useMainPosts();

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    const selectedTag: TagInterface =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
  };

  const moreButtonClickHandler = () => {
    navigate(LINK.POST_FREE);
  };

  useEffect(() => {
    refetchFreePosts(currentTag.en);
  }, [currentTag, refetchFreePosts]);

  return (
    <PostListLayout>
      <TagWrapper>
        <FreePostTagContainer
          onClick={handleTagClick}
          currentTag={currentTag.name as FreePostTag}
        />
      </TagWrapper>
      <PostListWrapper>
        {freePosts?.map((post) => <FreePost post={post} key={post.postId} />)}
        <MoreButton onClick={moreButtonClickHandler} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default FreeContainerByMain;
