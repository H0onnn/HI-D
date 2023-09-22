import React, { useState } from 'react';
import styled from 'styled-components';
// import { colors } from '../constants/colors';

const tabList = [
  { id: 1, name: '도움이 필요해요' },
  { id: 2, name: '자유게시판' },
];

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [showTap, setShowTap] = useState(1);
  const [helpPostList, setHelpPostList] = useState([]);
  const [freePostList, setFreePostList] = useState([]);

  const searchByKeyword = () => {
    if (keyword.trim() === '') return;
    // TODO: fetch
    setSearchHistory([keyword, ...searchHistory]);
    setKeyword('');
    setHelpPostList([]);
    setFreePostList([]);
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
            <SearchHistoryItem key={index}>{item}</SearchHistoryItem>
          ))}
        </div>
      </SearchHistoryContainer>
      <SearchResultContainer>
        <TabBox>
          {tabList.map((tab, index) => (
            <TabText
              key={index}
              isseleced={tab.id === showTap ? 'true' : 'false'}
              onClick={() => setShowTap(tab.id)}
            >
              {tab.name}
            </TabText>
          ))}
        </TabBox>
        <SearchResultList>
          <div>
            {showTap === 1 && helpPostList.map((post, index) => <div key={index}>haha</div>)}
          </div>
          <div>
            {showTap === 2 && freePostList.map((post, index) => <div key={index}>haha</div>)}
          </div>
        </SearchResultList>
      </SearchResultContainer>
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
    /* white-space: nowrap; */
    /* flex-wrap: nowrap; */
  }
`;
const SearchHistoryItem = styled.div`
  /* display: flex; */
  padding: 6px 12px;

  border-radius: 900px;
  background: #f9f9f9;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
  min-width: 50px;

  text-align: center;
`;
const SearchResultContainer = styled.div``;

const TabText = styled.div<{ isseleced: string }>`
  height: 34px;

  border-bottom: ${({ isseleced }) => (isseleced === 'true' ? '2px solid #000' : 'none')};
  color: ${({ isseleced }) => (isseleced === 'true' ? '#000' : '##C8C8C8')};
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const TabBox = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const SearchResultList = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
