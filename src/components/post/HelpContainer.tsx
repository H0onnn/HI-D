import React, { useEffect, useState } from 'react';
import { PageStatusInterface, PostContainerProps, PostInterface } from '../../types/post';
import styled from 'styled-components';
import HelpPostList from './HelpPostList';
import { getHelpPostList } from '@/services/post';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import { useLocation } from 'react-router-dom';
import LoadingContent from '../public/LoadingContent';
import ErrorContent from '../public/ErrorContent';

const HelpContainer = ({ keyword = '' }: PostContainerProps) => {
  const location = useLocation();
  const needFilter = ['/search', '/post'].some((path) => location.pathname.includes(path));
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const [major, setMajor] = useState<string>('');
  // TODO: 전공 필터 추가
  // TODO: 정렬 필터 추가
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const nextPageHandler = () => {
    if (!hasNext || page === 0 || loading) return;
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const fetchData = async () => {
    if (!hasNext || page === 0 || loading) return;
    setLoading(true);
    const response = await getHelpPostList({ majorCategory: major, page, keyword });
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
    setMajor('');
    fetchData();
  }, [page, major, keyword]);

  return (
    <PostListLayout>
      {needFilter && <></>}
      <TagWrapper></TagWrapper>
      <PostListWrapper>
        {loading && <LoadingContent />}
        {!loading && error && <ErrorContent />}
        <HelpPostList keyword={keyword} postList={postList} nextPageHandler={nextPageHandler} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default HelpContainer;

const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
