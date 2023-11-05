import React from 'react';
import Input from '../../public/Input';

const AccountSearchBar = ({
  searchByKeyword,
  inputRef,
}: {
  searchByKeyword: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}) => {
  return (
    <Input
      type='text'
      status={'search'}
      placeholder='검색'
      onKeyDown={searchByKeyword}
      ref={inputRef}
    />
  );
};
export default AccountSearchBar;
