import React, { useEffect, useState } from 'react';
import { PageStatusInterface, PostContainerProps, PostInterface } from '../../types/post';
import styled from 'styled-components';
import HelpPostList from './HelpPostList';
import { getHelpPostList } from '@/api/services/post';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import { useLocation } from 'react-router-dom';

const HelpContainer = ({ keyword }: PostContainerProps) => {
  const location = useLocation();
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const [major, setMajor] = useState<string>();
  // TODO: 전공 필터 추가
  // TODO: 정렬 필터 추가

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  useEffect(() => {
    if (!hasNext) return;
    getHelpPostList({ majorCategory: major, page, keyword }).then((response) => {
      if (!response) {
        setPage({ page: 1, hasNext: false });
      }
      setPostList((prev) => [...prev, ...response.dataList]);
      setPage({ page: 1, hasNext: response.hasNext });
    });
    setMajor('');
  }, [page, hasNext, major, keyword]);

  return (
    <PostListLayout>
      {['/search', '/post'].some((path) => location.pathname.includes(path)) && (
        <TagWrapper></TagWrapper>
      )}
      <PostListWrapper>
        <HelpPostList
          keyword={keyword}
          postList={postList}
          pageStatus={{ page, hasNext }}
          nextPageHandler={nextPageHandler}
        />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default HelpContainer;

const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
