import React, { useState } from 'react';
import styled from 'styled-components';
import PostListByTab from '../../components/post/PostListByTab';
import { truncateContent } from '../../utils/post';

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

  const searchByKeyword = () => {
    if (keyword.trim() === '') return;
    setSearchHistory([keyword, ...searchHistory]);
    setKeyword('');
  };

  return (
    <SearchPageLayout>
      <SearchBarContainer>
        <SearchInput
          type='text'
          placeholder='검색'
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <SearchButton onClick={searchByKeyword}>
          <img src='/src/public/images/elephant.png' alt='search_icon' />
        </SearchButton>
      </SearchBarContainer>
      <SearchHistoryContainer>
        <p>최근검색어</p>
        <div>
          {searchHistory.map((item, index) => (
            <SearchHistoryItem key={index}>{truncateContent(item, 6)}</SearchHistoryItem>
          ))}
        </div>
      </SearchHistoryContainer>
      <PostListByTab tabList={tabList} getPostListOptions={{ keyword }} />
    </SearchPageLayout>
  );
};

export default SearchPage;

const SearchPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const SearchBarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  position: relative;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 4.6rem 0 1.6rem;

  border-radius: 12px;
  background: #f8f8f8;
  border: none;

  font-family: SF Pro Text;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  &::placeholder {
    color: #c6c6c6;
  }
  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;

  > img {
    width: 20px;
    height: 20px;
  }
`;
const SearchHistoryContainer = styled.div`
  min-height: 9rem;
  display: flex;
  flex-direction: column;
  > p {
    padding: 8px 13px;
    color: #c6c6c6;
    font-family: SF Pro Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }
  > div {
    display: flex;
    gap: 1rem;
    overflow: hidden;
    white-space: nowrap;
  }
`;
const SearchHistoryItem = styled.div`
  width: 100%;
  padding: 6px 12px;

  border-radius: 900px;
  background: #f9f9f9;

  text-align: center;
`;
