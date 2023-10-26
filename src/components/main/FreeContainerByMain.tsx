import React, { useEffect, useState } from 'react';
import { FreePostTag, Post } from '../../types/post';
import styled from 'styled-components';
import FreePostTagContainer from '../post/FreePostTag';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import FreePost from '../post/FreePost';
import MoreButton from './MoreButton';
import { getFreePostListByMain } from '@/api/services/main';
import { Itag, freePostTagList } from '@/constants/post';

const FreeContainerByMain = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<Post[]>([]);
  const [currentTag, setCurrentTag] = useState<Itag>(freePostTagList[0]);

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    const selectedTag: Itag =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
  };

  useEffect(() => {
    getFreePostListByMain(currentTag.en).then((response) => {
      setPostList(response.dataList);
    });
  }, [currentTag]);

  return (
    <>
      <TagWrapper>
        <FreePostTagContainer
          onClick={handleTagClick}
          currentTag={currentTag.name as FreePostTag}
        />
      </TagWrapper>
      <PostListWrapper>
        {postList.map((post) => (
          <FreePost post={post} key={post.postId} />
        ))}
        <MoreButton onClick={() => navigate(LINK.POST_FREE)} />
      </PostListWrapper>
    </>
  );
};

export default FreeContainerByMain;

const PostListWrapper = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
