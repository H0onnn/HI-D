import React, { useEffect, useState } from 'react';
import { FreePostTag, Post, PageStatusInterface, PostContainerProps } from '../../types/post';
import styled from 'styled-components';
import FreePostTagContainer from '../../components/post/FreePostTag';
import FreePostList from '../../components/post/FreePostList';
import { Itag, freePostTagList } from '@/constants/post';
import { getFreePostList } from '@/api/services/post';

const FreeContainer = ({ keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [currentTag, setCurrentTag] = useState<Itag>(freePostTagList[0]);
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: false });

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    const selectedTag: Itag =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
  };

  useEffect(() => {
    getFreePostList({ tag: currentTag.en, page }).then((response) => {
      setPostList(response.dataList);
    });
  }, [currentTag, page]);

  return (
    <>
      <TagWrapper>
        <FreePostTagContainer
          onClick={handleTagClick}
          currentTag={currentTag.name as FreePostTag}
        />
      </TagWrapper>
      <PostListWrapper>
        <FreePostList
          keyword={keyword}
          postList={postList}
          pageStatus={{ page, isNext }}
          nextPageHandler={nextPageHandler}
        />
      </PostListWrapper>
    </>
  );
};

export default FreeContainer;

const PostListWrapper = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
