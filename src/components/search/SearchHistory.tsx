import React from 'react';
import styled from 'styled-components';
import { truncateContent } from '../../utils/post';
import DeleteIcon from '../../public/images/elephant.png';

type Props = {
  searchHistory: string[];
  deleteHistory: (keyword: string) => void;
  deleteAllHistory: () => void;
  searchByHistoryKeyword: (keyword: string) => void;
};
const SearchHistory = ({
  searchHistory,
  deleteAllHistory,
  deleteHistory,
  searchByHistoryKeyword,
}: Props) => {
  return (
    <Layout>
      <Title>
        <div>최근검색어</div>
        <div onClick={deleteAllHistory}>전체삭제</div>
      </Title>
      <SearchHistoryContainer>
        {searchHistory.map((keyword, index) => (
          <SearchHistoryItem key={index}>
            <KeywordText onClick={() => searchByHistoryKeyword(keyword)}>
              {truncateContent(keyword, 6)}
            </KeywordText>
            <IconWrapper
              onClick={(e) => {
                e.preventDefault();
                deleteHistory(keyword);
              }}
            >
              <img src={DeleteIcon} alt='delete_icon' />
            </IconWrapper>
          </SearchHistoryItem>
        ))}
      </SearchHistoryContainer>
    </Layout>
  );
};
export default SearchHistory;

const Layout = styled.div`
  padding: 1rem 2rem;
  min-height: 9rem;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  color: #c6c6c6;
  font-family: SF Pro Text;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  > div:nth-child(2) {
    cursor: pointer;
    &:hover {
      color: #252424;
    }
    &:active {
      color: #252424;
    }
  }
`;

const SearchHistoryContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  height: 3.6rem;
  white-space: nowrap;
  align-items: end;
  overflow-x: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SearchHistoryItem = styled.div`
  position: relative;
  padding: 0.6rem 1.2rem;
  height: 3.3rem;
  /* background: #f9f9f9; */
  border-radius: 90rem;
  border: 1px solid var(--2, #a5adff);
  &:hover {
  }
  &:active {
  }
`;
const KeywordText = styled.div`
  cursor: pointer;
  color: var(--2, #a5adff);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const IconWrapper = styled.div`
  z-index: 1;
  cursor: pointer;
  position: absolute;
  top: -0.3rem;
  right: 0;
  width: 1.4rem;
  height: 1.4rem;
  background-color: red;
  border-radius: 50%;
  > img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1.1;
  }
`;
