import React, { ChangeEvent } from 'react';
// import styled from 'styled-components';
import { InputWrapper } from '../../styles/styles';
import Input from '../public/Input';

const SearchBar = ({
  setKeyword,
  keyword,
}: {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
}) => {
  return (
    <InputWrapper>
      <Input
        type='text'
        status={'search'}
        placeholder='검색어를 입력해주세요.'
        image={'/src/public/images/elephant.png'}
        value={keyword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
        // onKeyUp={search}
      />
    </InputWrapper>
  );
};
export default SearchBar;
