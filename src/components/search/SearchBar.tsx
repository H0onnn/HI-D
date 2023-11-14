import React, { useRef } from 'react';
import Input from '../public/Input';
import { SearchInputWrapper } from '../../styles/styles';
import usePostSearchStore from '@/store/postSearchStore';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setKeyword, setKeywordHistory, setShowKeywordHistory } = usePostSearchStore();

  const searchByKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 완전한 한글만 되는가? 숫자x, 영어x, 백엔드 조건이 무엇인지.
    if (e.nativeEvent.isComposing) return;
    if (e.key !== 'Enter') return;
    const inputValue = e.currentTarget.value.trim();
    if (inputValue === '') return;
    setKeyword(inputValue);
    setKeywordHistory(inputValue);
    setShowKeywordHistory(false);
    e.currentTarget.value = '';
  };

  return (
    <SearchInputWrapper>
      <Input
        type='text'
        status={'search'}
        placeholder='검색'
        onKeyDown={searchByKeyword}
        ref={inputRef}
        onClick={() => setShowKeywordHistory(true)}
      />
    </SearchInputWrapper>
  );
};
export default SearchBar;
