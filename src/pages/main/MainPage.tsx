import React, { useState } from 'react';
import { MainPageLayout } from '../../styles/styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import MainSearchBar from '../../components/main/MainSearchBar';
import MainPageHeader from '../../components/main/MainPageHeader';
import { TabInterface } from '../../types/post';
import PopularPostList from '../../components/main/PopularPostList';
import TabByCategory from '@/components/post/TabByCategory';
import { colors } from '@/constants/colors';
import { tabList } from '@/constants/post';
import PostListByCategary from '@/components/post/PostListByCategary';

const MainPage = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <MainPageHeader />
      <MainPageLayout>
        <MainSearchBar onClick={() => navigate(LINK.SEARCH)} />
        <Title>
          9월 3주차 <span>인기 게시물🔥</span>
        </Title>
        <PopularPostList />
        <TabByCategory selectedTab={selectedTab} tabClickHandler={tabClickHandler} />
        {PostListByCategary(selectedTab.category)}
      </MainPageLayout>
    </>
  );
};

export default MainPage;

const Title = styled.div`
  width: 100%;
  height: 3.6rem;
  padding: 0.8rem 2.6rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  > span {
    color: ${colors.primary};
  }
  > img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
