import React from 'react';
import useUser from '@/hooks/useUser';
import PageHeader from '@/components/public/PageHeader';
import SetupEditSchoolAndMajor from '@/components/mypage/actions/edit/schoolInfo/SetupEditSchoolAndMajor';
import { PageLayout } from '@/styles/styles';

const EditSchoolInfoPage = () => {
  const { user } = useUser();

  return (
    <>
      <PageHeader title='학교정보 수정' isGoBack />
      <PageLayout>
        <SetupEditSchoolAndMajor user={user} />
      </PageLayout>
    </>
  );
};

export default EditSchoolInfoPage;
