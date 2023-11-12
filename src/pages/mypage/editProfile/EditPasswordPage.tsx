import React from 'react';
import useMyPageActions from '@/hooks/useMyPageActions';
import PageHeader from '@/components/public/PageHeader';
import GenericForm from '@/components/public/form/GenericForm';
import SetupEditPassword from '@/components/mypage/actions/edit/password/SetupEditPassword';
import { EditPasswordInterface } from '@/types/user';
import { PageLayout } from '@/styles/styles';

const EditPasswordPage = () => {
  const { editPasswordHandler } = useMyPageActions();

  return (
    <>
      <PageHeader title='비밀번호 변경' isGoBack />
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
