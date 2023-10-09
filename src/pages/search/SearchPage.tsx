import React, { useState, useRef } from 'react';
import { MainPageLayout } from '../../styles/styles';
import SearchHistory from '../../components/search/SearchHistory';
import SearchBar from '../../components/search/SearchBar';
import MainPageHeader from '../../components/main/MainPageHeader';
import TabByCategory from '@/components/post/TabByCategory';
import { TabInterface } from '@/types/post';
import { postListByCategory } from '../main/MainPage';

const SearchPage = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState('');
  const [selectedTab, setSelectedTab] = useState<TabInterface>(tabList[0]);
  const location = 'search';
  const [showSearchHistory, setShowSearchHistory] = useState<boolean>(true);

  const searchByKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key !== 'Enter') return;
    const inputValue = e.currentTarget.value.trim();
    if (inputValue === '') return;
    setKeyword(inputValue);
    setSearchHistory([inputValue, ...searchHistory]);
    setShowSearchHistory(false);
    e.currentTarget.value = '';
  };

  const searchByHistoryKeyword = (keyword: string) => {
    // fetch
    const updatedHistory = searchHistory.filter((item) => item !== keyword);
    setKeyword(keyword);
    setSearchHistory([keyword, ...updatedHistory]);
    setShowSearchHistory(false);
  };

  const deleteAllHistory = () => {
    setSearchHistory([]);
  };
  const deleteHistory = (keyword: string) => {
    const updatedHistory = searchHistory.filter((item) => item !== keyword);
    setSearchHistory(updatedHistory);
  };

  const tabClickHandler = (tab: TabInterface) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <MainPageHeader />
      <MainPageLayout>
        <SearchBar
          searchByKeyword={searchByKeyword}
          inputRef={inputRef}
          showSearchHistory={() => setShowSearchHistory(true)}
        />
        {showSearchHistory ? (
          <SearchHistory
            searchHistory={searchHistory}
            deleteAllHistory={deleteAllHistory}
            deleteHistory={deleteHistory}
            searchByHistoryKeyword={searchByHistoryKeyword}
          />
        ) : (
          <>
            <TabByCategory
              tabList={tabList}
              selectedTab={selectedTab}
              tabClickHandler={tabClickHandler}
            />
            {postListByCategory(selectedTab.category, location, keyword)}
          </>
        )}
      </MainPageLayout>
    </>
  );
};

export default SearchPage;

const tabList = [
  { id: 1, name: '도움이 필요해요', category: 'help' },
  { id: 2, name: '자유게시판', category: 'free' },
];
