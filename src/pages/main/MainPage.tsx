import React, { useEffect, useState } from 'react';
import { MainPageLayout } from '../../styles/styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import MainSearchBar from '../../components/main/MainSearchBar';
import MainPageHeader from '../../components/main/MainPageHeader';
import { TabInterface, Post } from '../../types/post';
import PopularPostList from '../../components/main/PopularPostList';
import HotIcon from '../../public/images/elephant.png';
import TabByCategory from '@/components/post/TabByCategory';
import FreeContainer from '@/components/post/FreeContainer';
import HelpContainer from '@/components/post/HelpContainer';
import AllContainer from '@/components/post/AllContainer';

const MainPage = () => {
  const navigate = useNavigate();
  const [popularPostList, setPopularPostList] = useState<Post[]>([]);
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);
  const location = 'main';

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    setPopularPostList([]);
  }, []);

  return (
    <>
      <MainPageHeader />
      <MainPageLayout>
        <MainSearchBar onClick={() => navigate(LINK.SEARCH)} />
        <Title>
          <p>
            9월 3주차 <span>인기 게시물</span>
          </p>
          <img src={HotIcon} alt='hot_icon' />
        </Title>
        <PopularPostList postList={popularPostList} />
        <TabByCategory
          tabList={tabList}
          selectedTab={selectedTab}
          tabClickHandler={tabClickHandler}
        />
        {postListByCategory(selectedTab.category, location)}
      </MainPageLayout>
    </>
  );
};

export default MainPage;

const tabList = [
  { id: 1, name: '도움이 필요해요', category: 'help' },
  { id: 2, name: '자유게시판', category: 'free' },
];

export const postListByCategory = (category: string, location: string, keyword?: string) => {
  switch (category) {
    case 'help':
      return <HelpContainer location={location} keyword={keyword} />;
    case 'free':
      return <FreeContainer location={location} keyword={keyword} />;
    case 'all':
      return <AllContainer location={location} />;
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
    color: #252424;
    > span {
      color: #5061ff;
    }
  }
  > img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
