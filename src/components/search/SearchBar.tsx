import React, { ChangeEvent, useEffect } from 'react';
import Input from '../public/Input';
import { SearchInputWrapper } from '../../styles/styles';

const SearchBar = ({
  setKeyword,
  keyword,
  searchByKeyword,
}: {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
  searchByKeyword: ({ keyword }: { keyword: string }) => void;
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchByKeyword({ keyword: e.currentTarget.value });
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <SearchInputWrapper>
      <Input
        type='text'
        status={'search'}
        placeholder='검색'
        value={keyword}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        ref={inputRef}
      />
    </SearchInputWrapper>
  );
};
export default SearchBar;
