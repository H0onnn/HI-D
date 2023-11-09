import React from 'react';
import { useNavigate } from 'react-router-dom';
import useMyPageActions from '@/hooks/useMyPageActions';
import PageHeader from '@/components/public/PageHeader';
import GenericForm from '@/components/public/form/GenericForm';
import SetupEditPassword from '@/components/mypage/actions/edit/SetupEditPassword';
import { EditPasswordInterface } from '@/types/user';
import { PageLayout } from '@/styles/styles';

const EditPasswordPage = () => {
  const navigate = useNavigate();
  const { editPasswordHandler } = useMyPageActions();

  return (
    <>
      <PageHeader title='비밀번호 변경' onClick={() => navigate(-1)} />
      <PageLayout>
        <GenericForm<EditPasswordInterface>
          formOptions={{ mode: 'onChange' }}
          onSubmit={(data: EditPasswordInterface) => editPasswordHandler(data)}
        >
          <SetupEditPassword />
        </GenericForm>
      </PageLayout>
    </>
  );
};

export default EditPasswordPage;
