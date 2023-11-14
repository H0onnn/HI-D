import React, { useEffect, useState } from 'react';
import { PostContainerProps } from '../../types/post';
import styled from 'styled-components';
import HelpPostList from './HelpPostList';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import { useLocation } from 'react-router-dom';

const HelpContainer = ({ keyword = '' }: PostContainerProps) => {
  const location = useLocation();
  const needFilter = ['/search', '/post'].some((path) => location.pathname.includes(path));
  const [major, setMajor] = useState<string>('');
  // TODO: 전공 필터 추가
  // TODO: 정렬 필터 추가

  useEffect(() => {
    setMajor('');
  }, [major]);

  return (
    <PostListLayout>
      {needFilter && <></>}
      <TagWrapper></TagWrapper>
      <PostListWrapper>
        <HelpPostList keyword={keyword} major={major} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default HelpContainer;

const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
