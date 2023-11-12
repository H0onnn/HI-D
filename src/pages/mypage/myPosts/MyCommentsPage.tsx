import React, { useState } from 'react';
import PageHeader from '@/components/public/PageHeader';
import TabByCategory from '@/components/post/TabByCategory';
import MyCommentsList from '@/components/comment/myComments/listing/MyCommentsList';
import { tabList } from '@/constants/post';
import { TabInterface } from '@/types/post';
import { MainPageLayout } from '@/styles/styles';

const MyCommentsPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <PageHeader title='내가 쓴 댓글' isGoBack />
      <MainPageLayout>
        <TabByCategory selectedTab={selectedTab} tabClickHandler={tabClickHandler} />
        <MyCommentsList category={selectedTab.category} />
      </MainPageLayout>
    </>
  );
};

export default MyCommentsPage;
