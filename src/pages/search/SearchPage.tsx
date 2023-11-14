import React, { useState } from 'react';
import { MainPageLayout } from '../../styles/styles';
import SearchHistory from '../../components/search/SearchHistory';
import SearchBar from '../../components/search/SearchBar';
import TabByCategory from '@/components/post/TabByCategory';
import { TabInterface } from '@/types/post';
import PageHeader from '@/components/public/PageHeader';
import PostListByCategory from '@/components/post/PostListByCategory';
import { tabList } from '@/constants/post';
import usePostSearchStore from '@/store/postSearchStore';

const SearchPage = () => {
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);
  const { keyword, showKeywordHistory } = usePostSearchStore();

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <PageHeader title='검색' isGoBack />
      <MainPageLayout>
        <SearchBar />
        {showKeywordHistory && <SearchHistory />}
        {!showKeywordHistory && (
          <>
            <TabByCategory selectedTab={selectedTab} tabClickHandler={tabClickHandler} />
            {PostListByCategory(selectedTab.category, keyword)}
          </>
        )}
      </MainPageLayout>
    </>
  );
};

export default SearchPage;
