import React, { useEffect, useState } from 'react';
import { Post, PageStatusInterface, PostContainerProps } from '../../types/post';
import styled from 'styled-components';
import AllPostList from './AllPostLIst';

const AllContainer = ({ location, keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: false });

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  useEffect(() => {
    setPostList([
      {
        postId: 1,
        writer: 'sjm96',
        writerImage: '',
        major: '컴퓨터공학과',
        category: 'free',
        title: '안녕하세요!',
        content:
          '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다',
        viewCount: 5,
        recommendCount: 1,
        replyCount: 2,
        images: [
          '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
          '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
          '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
        ],
        createAt: '2023-09-17T06:52:38.123Z',
        updateAt: '2023-09-17T06:52:38.123Z',
      },
      {
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'help',
        writerImage: '',
        content: '내용입니다',
        title: '안녕하세요!',
        viewCount: 5,
        recommendCount: 1,
        replyCount: 2,
        images: [
          '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
          '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
          '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
        ],
        createAt: '2023-09-17T06:52:38.123Z',
        updateAt: '2023-09-17T06:52:38.123Z',
      },
      {
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'free',
        content: '내용입니다',
        title: '안녕하세요!',
        writerImage: '',
        viewCount: 5,
        recommendCount: 1,
        replyCount: 2,
        images: [
          '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
          '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
          '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
        ],
        createAt: '2023-09-17T06:52:38.123Z',
        updateAt: '2023-09-17T06:52:38.123Z',
      },
    ]);
  }, [page]);

  const postImgSize = location === 'post' ? 'medium' : 'small';

  return (
    <>
      <PostListWrapper>
        <AllPostList
          keyword={keyword}
          postList={postList}
          pageStatus={{ page, isNext }}
          nextPageHandler={nextPageHandler}
          postImgSize={postImgSize}
        />
      </PostListWrapper>
    </>
  );
};

export default AllContainer;

const PostListWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;
