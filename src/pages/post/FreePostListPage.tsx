import React from 'react';
import { MainPageLayout } from '../../styles/styles';
import PageHeader from '../../components/public/PageHeader';
import FreeContainer from '@/components/post/FreeContainer';

const FreePostListPage = () => {
  return (
    <>
      <PageHeader title='자유게시판' />
      <MainPageLayout>
        <FreeContainer />
      </MainPageLayout>
    </>
  );
};

export default FreePostListPage;
