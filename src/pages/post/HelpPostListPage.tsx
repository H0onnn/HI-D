import React from 'react';
import { MainPageLayout } from '../../styles/styles';
import PageHeader from '../../components/public/PageHeader';
import HelpContainer from '@/components/post/HelpContainer';

const HelpPostListPage = () => {
  const location = 'post';

  return (
    <>
      <PageHeader title='도움이 필요해요' />
      <MainPageLayout>
        <HelpContainer location={location} />
      </MainPageLayout>
    </>
  );
};

export default HelpPostListPage;
