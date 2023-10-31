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
import LoadingContent from '../public/LoadingContent';
import ErrorContent from '../public/ErrorContent';

const FreeContainer = ({ keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [currentTag, setCurrentTag] = useState<TagInterface>(freePostTagList[0]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const needFilter = ['/search', '/post'].some((path) => location.pathname.includes(path));
  // TODO: 정렬 필터 추가
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const nextPageHandler = () => {
    if (!hasNext || page === 0 || loading) return;
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag.name === e.currentTarget.textContent) return;
    setPage({ page: 1, hasNext: true });
    setPostList([]);
    const selectedTag: TagInterface =
      freePostTagList.find((tag) => tag.name === e.currentTarget.textContent) || freePostTagList[0];
    setCurrentTag(selectedTag);
  };

  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    const response = await getFreePostList({ tag: currentTag.en, page, keyword });
    if (response) {
      setPostList((prev) => [...prev, ...response.dataList]);
      setPage((prev) => ({ ...prev, hasNext: response.hasNext }));
    } else {
      setPage({ page: 0, hasNext: false });
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

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
        {loading && <LoadingContent />}
        {!loading && error && <ErrorContent />}
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
