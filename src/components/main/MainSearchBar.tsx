import React from 'react';
import Input from '../public/Input';
import { SearchInputWrapper } from '../../styles/styles';

const MainSearchBar = ({ onClick }: { onClick: () => void }) => {
  return (
    <SearchInputWrapper>
      <Input type='text' status={'search'} placeholder='검색' onClick={onClick} />
    </SearchInputWrapper>
  );
};

export default MainSearchBar;
