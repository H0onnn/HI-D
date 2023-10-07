import React from 'react';
import { MainPageLayout } from '../../styles/styles';
import PageHeader from '../../components/public/PageHeader';
import FreeContainer from '@/components/post/FreeContainer';

const FreePostListPage = () => {
  const location = 'post';

  return (
    <>
      <PageHeader title='자유게시판' />
      <MainPageLayout>
        <FreeContainer location={location} />
      </MainPageLayout>
    </>
  );
};

export default FreePostListPage;
