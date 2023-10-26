import React from 'react';
import Input from '../public/Input';
import { SearchInputWrapper } from '../../styles/styles';

const SearchBar = ({
  searchByKeyword,
  inputRef,
  showSearchHistory,
}: {
  searchByKeyword: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  showSearchHistory: () => void;
}) => {
  return (
    <SearchInputWrapper>
      <Input
        type='text'
        status={'search'}
        placeholder='검색'
        onKeyDown={searchByKeyword}
        ref={inputRef}
        onClick={showSearchHistory}
      />
    </SearchInputWrapper>
  );
};
export default SearchBar;
