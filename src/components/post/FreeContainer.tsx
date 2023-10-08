import React, { useEffect, useState } from 'react';
import { FreePostTag, Post, PageStatusInterface, PostContainerProps } from '../../types/post';
import styled from 'styled-components';
import FreePostTagContainer from '../../components/post/FreePostTag';
import FreePostList from '../../components/post/FreePostList';

const FreeContainer = ({ location, keyword }: PostContainerProps) => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [currentTag, setCurrentTag] = useState<FreePostTag>('전체');
  const [{ page, isNext }, setPage] = useState<PageStatusInterface>({ page: 1, isNext: false });

  const nextPageHandler = () => {
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const handleTagClick = (e: React.MouseEvent<HTMLElement>) => {
    if (currentTag === e.currentTarget.textContent) return;
    setCurrentTag(e.currentTarget.textContent as FreePostTag);
  };

  useEffect(() => {
    setPostList([
      {
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'free',
        writerImage: '',
        title: '안녕하세요!',
        content:
          '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다',
        viewCount: 5,
        recommendCount: 1,
        replyCount: 2,
        images: [],
        createAt: '2023-09-17T06:52:38.123Z',
        updateAt: '2023-09-17T06:52:38.123Z',
      },
      {
        postId: 1,
        writerImage: '',
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'help',
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
        writerImage: '',
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
    ]);
  }, [currentTag, page]);

  const postImgSize = location === 'post' ? 'medium' : 'small';

  return (
    <>
      <TagWrapper>
        <FreePostTagContainer onClick={handleTagClick} currentTag={currentTag} />
      </TagWrapper>
      <PostListWrapper>
        <FreePostList
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
