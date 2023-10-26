import React, { useEffect, useState } from 'react';
import { MainPageLayout } from '../../styles/styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import MainSearchBar from '../../components/main/MainSearchBar';
import MainPageHeader from '../../components/main/MainPageHeader';
import { TabInterface, Post } from '../../types/post';
import PopularPostList from '../../components/main/PopularPostList';
import TabByCategory from '@/components/post/TabByCategory';
import { colors } from '@/constants/colors';
import HelpContainerByMain from '@/components/main/HelpContainerByMain';
import FreeContainerByMain from '@/components/main/FreeContainerByMain';

const MainPage = () => {
  const navigate = useNavigate();
  const [popularPostList, setPopularPostList] = useState<Post[]>([]);
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    setPopularPostList([
      {
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'free',
        writerImage: '',
        title: '안녕하세fefefefefe fefaefaewfaefaefaefaefaef요!',
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
        writerImage: '',
        postId: 1,
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
        writerImage: '',
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'free',
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
        writerImage: '',
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'free',
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
        writerImage: '',
        postId: 1,
        writer: 'sjm96',
        major: '컴퓨터공학과',
        category: 'free',
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
    ]);
  }, []);

  return (
    <>
      <MainPageHeader />
      <MainPageLayout>
        <MainSearchBar onClick={() => navigate(LINK.SEARCH)} />
        <Title>
          <p>
            9월 3주차 <span>인기 게시물🔥</span>
          </p>
        </Title>
        <PopularPostList postList={popularPostList} />
        <TabByCategory
          tabList={tabList}
          selectedTab={selectedTab}
          tabClickHandler={tabClickHandler}
        />
        <PostListWrapper>{postListByCategory(selectedTab.category)}</PostListWrapper>
      </MainPageLayout>
    </>
  );
};

export default MainPage;

const tabList = [
  { id: 1, name: '도움이 필요해요', category: 'help', link: LINK.POST_HELP },
  { id: 2, name: '자유게시판', category: 'free', link: LINK.POST_FREE },
];

export const postListByCategory = (category: string) => {
  switch (category) {
    case 'help':
      return <HelpContainerByMain />;
    case 'free':
      return <FreeContainerByMain />;
    default:
      return;
  }
};

const Title = styled.div`
  width: 100%;
  height: 3.6rem;
  padding: 0.8rem 2.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  > p {
    font-size: 20px;
    font-family: SUIT;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    color: ${colors.black};
    > span {
      color: ${colors.primary};
    }
  }
  > img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
const PostListWrapper = styled.div`
  height: 100%;
  background-color: ${colors.pastel};
`;
