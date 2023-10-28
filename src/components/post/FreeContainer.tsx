import React, { useEffect, useState } from 'react';
import {
  FreePostTag,
  PageStatusInterface,
  PostContainerProps,
  TagInterface,
  PostInterface,
} from '../../types/post';
import FreePostTagContainer from '../../components/post/FreePostTag';
import FreePostList from '../../components/post/FreePostList';
import { freePostTagList } from '@/constants/post';
import { getFreePostList } from '@/services/post';
import { PostListLayout, PostListWrapper, TagWrapper } from '@/styles/post';

const FreeContainer = ({ keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [currentTag, setCurrentTag] = useState<TagInterface>(freePostTagList[0]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const needFilter = ['/search', '/post'].some((path) => location.pathname.includes(path));
  // TODO: 정렬 필터 추가

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    const selectedTag: TagInterface =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
  };

  useEffect(() => {
    if (!hasNext) return;
    getFreePostList({ tag: currentTag.en, page, keyword }).then((response) => {
      if (!response) {
        setPage({ page: 1, hasNext: false });
      }
      setPostList((prev) => [...prev, ...response.dataList]);
      setPage({ page: 1, hasNext: response.hasNext });
    });
  }, [page, hasNext, currentTag, keyword]);

  return (
    <PostListLayout>
      {needFilter && <></>}
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
          pageStatus={{ page, hasNext }}
          nextPageHandler={nextPageHandler}
        />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default FreeContainer;
