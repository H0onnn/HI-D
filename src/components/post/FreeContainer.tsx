import React, { useState } from 'react';
import { FreePostTag, PostContainerProps, TagInterface } from '../../types/post';
import FreePostTagContainer from '../../components/post/FreePostTag';
import FreePostList from '../../components/post/FreePostList';
import { freePostTagList } from '@/constants/post';
import { PostListLayout, PostListWrapper, TagWrapper } from '@/styles/post';

const FreeContainer = ({ keyword }: PostContainerProps) => {
  const [currentTag, setCurrentTag] = useState<TagInterface>(freePostTagList[0]);

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    const selectedTag: TagInterface =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
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
        <FreePostList keyword={keyword} tag={currentTag.en} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default FreeContainer;
