import React from 'react';
import { PostContainerProps } from '../../types/post';
import styled from 'styled-components';
import HelpPostList from './HelpPostList';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import { useLocation } from 'react-router-dom';
import MajorFilterSelect from './postItem/MajorFilterSelect';

const HelpContainer = ({ keyword = '' }: PostContainerProps) => {
  const location = useLocation();
  const needMajorFilter = ['/search', '/post'].some((path) => location.pathname.includes(path));

  return (
    <PostListLayout>
      <TagWrapper />
      {needMajorFilter && <MajorFilterSelect />}
      <PostListWrapper>
        <HelpPostList keyword={keyword} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default HelpContainer;

const TagWrapper = styled.div`
  padding: 6.8rem 0 0 0;
`;
