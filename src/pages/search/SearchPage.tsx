import React, { useState } from 'react';
// import styled from 'styled-components';
import PostListByTab from '../../components/post/PostListByTab';
import { PageLayout } from '../../styles/styles';
import SearchHistory from '../../components/search/SearchHistory';
import SearchBar from '../../components/search/SearchBar';
import PageHeader from '../../components/public/PageHeader';

const tabList = [
  { id: 1, name: '도움이 필요해요', category: 'help' },
  { id: 2, name: '자유게시판', category: 'free' },
];
// TODO: mypage tabList
// const tabList = [
//   { id: 0, name: '전체', category: '' },
//   { id: 1, name: '도움이 필요해요', category: 'help' },
//   { id: 2, name: '자유게시판', category: 'free' },
// ];
const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const searchByKeyword = ({ keyword }: { keyword: string }) => {
    if (!keyword || keyword.trim() === '') return;
    // fetch
    setSearchHistory([keyword, ...searchHistory]);
    setKeyword('');
  };

  return (
    <>
      <PageHeader />
      <PageLayout>
        <SearchBar setKeyword={setKeyword} keyword={keyword} searchByKeyword={searchByKeyword} />
        <SearchHistory searchHistory={searchHistory} />
        <PostListByTab tabList={tabList} getPostListOptions={{ keyword }} />
      </PageLayout>
    </>
  );
};

export default SearchPage;
