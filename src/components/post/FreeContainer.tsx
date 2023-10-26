import React, { useEffect, useState } from 'react';
import { FreePostTag, Post, PageStatusInterface, PostContainerProps } from '../../types/post';
import FreePostTagContainer from '../../components/post/FreePostTag';
import FreePostList from '../../components/post/FreePostList';
import { Itag, freePostTagList } from '@/constants/post';
import { getFreePostList } from '@/api/services/post';
import { PostListLayout, PostListWrapper, TagWrapper } from '@/styles/post';

const FreeContainer = ({ keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [currentTag, setCurrentTag] = useState<Itag>(freePostTagList[0]);
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: true });
  // TODO: 정렬 필터 추가

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
    if (!isNext) return;
    getFreePostList({ tag: currentTag.en, page, keyword }).then((response) => {
      if (!response) {
        setPage({ page: 1, isNext: false });
      }
      setPostList((prev) => [...prev, ...response.dataList]);
      setPage({ page: 1, isNext: response.hasNext });
    });
  }, [page, isNext, currentTag, keyword]);

  return (
    <PostListLayout>
      {['/search', '/post'].some((path) => location.pathname.includes(path)) && (
        <TagWrapper>
          <FreePostTagContainer
            onClick={handleTagClick}
            currentTag={currentTag.name as FreePostTag}
          />
        </TagWrapper>
      )}
      <PostListWrapper>
        <FreePostList
          keyword={keyword}
          postList={postList}
          pageStatus={{ page, isNext }}
          nextPageHandler={nextPageHandler}
        />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default FreeContainer;
