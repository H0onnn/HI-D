import React from 'react';
import useUser from '@/hooks/useUser';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/public/PageHeader';
import SetupEditSchoolAndMajor from '@/components/mypage/actions/edit/schoolInfo/SetupEditSchoolAndMajor';
import { PageLayout } from '@/styles/styles';

const EditSchoolInfoPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <>
      <PageHeader title='학교정보 수정' onClick={() => navigate(-1)} />
      <PageLayout>
        <SetupEditSchoolAndMajor user={user} />
      </PageLayout>
    </>
  );
};

export default EditSchoolInfoPage;
