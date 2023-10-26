import React, { useEffect, useState } from 'react';
import { Post, PageStatusInterface, PostContainerProps } from '../../types/post';
import styled from 'styled-components';
import HelpPostList from './HelpPostList';
import { getHelpPostList } from '@/api/services/post';

const HelpContainer = ({ keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: false });
  const [major, setMajor] = useState<string>();

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  useEffect(() => {
    getHelpPostList({ majorCategory: major, page }).then((response) => {
      setPostList(response.dataList);
    });
  }, [page, major]);

  setMajor('');

  return (
    <>
      <TagWrapper></TagWrapper>
      <PostListWrapper>
        <HelpPostList
          keyword={keyword}
          postList={postList}
          pageStatus={{ page, isNext }}
          nextPageHandler={nextPageHandler}
        />
      </PostListWrapper>
    </>
  );
};

export default HelpContainer;

const PostListWrapper = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
