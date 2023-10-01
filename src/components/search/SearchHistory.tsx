import React from 'react';
import styled from 'styled-components';
import { truncateContent } from '../../utils/post';

const SearchHistory = ({ searchHistory }: { searchHistory: string[] }) => {
  return (
    <SearchHistoryContainer>
      <p>최근검색어</p>
      <div>
        {searchHistory.map((item, index) => (
          <SearchHistoryItem key={index}>{truncateContent(item, 6)}</SearchHistoryItem>
        ))}
      </div>
    </SearchHistoryContainer>
  );
};
export default SearchHistory;

const SearchHistoryContainer = styled.div`
  min-height: 9rem;
  display: flex;
  flex-direction: column;
  > p {
    padding: 0.8rem 1.3rem;
    color: #c6c6c6;
    font-family: SF Pro Text;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 2.2rem;
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
  padding: 0.6rem 1.2rem;
  border-radius: 90rem;
  background: #f9f9f9;
  text-align: center;
`;
