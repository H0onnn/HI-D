import AccountList from '@/components/admin/account/AccountList';
import AccountSearchBar from '@/components/admin/account/AccountSearchBar';
import MainPageHeader from '@/components/main/MainPageHeader';
import { AdminPageLayout } from '@/styles/admin';
import React, { useRef, useState } from 'react';

const AccountPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState('');

  const searchByKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key !== 'Enter') return;
    const inputValue = e.currentTarget.value.trim();
    if (inputValue === '') return;
    setKeyword(inputValue);
    e.currentTarget.value = '';
  };

  return (
    <>
      <MainPageHeader />
      <AdminPageLayout>
        <AccountSearchBar searchByKeyword={searchByKeyword} inputRef={inputRef} />
        <AccountList keyword={keyword} />
      </AdminPageLayout>
    </>
  );
};

export default AccountPage;
