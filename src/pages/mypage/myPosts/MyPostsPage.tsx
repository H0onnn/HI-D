import React, { useState } from 'react';
import PageHeader from '@/components/public/PageHeader';
import TabByCategory from '@/components/post/TabByCategory';
import { tabList } from '@/constants/post';
import { TabInterface } from '@/types/post';
import { MainPageLayout } from '@/styles/styles';
import PostListByCategory from '@/components/post/PostListByCategory';

const MyPostsPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <PageHeader title='내가 쓴 글' isGoBack />
      <MainPageLayout>
        <TabByCategory selectedTab={selectedTab} tabClickHandler={tabClickHandler} />
        {PostListByCategory(selectedTab.category)}
      </MainPageLayout>
    </>
  );
};

export default MyPostsPage;
