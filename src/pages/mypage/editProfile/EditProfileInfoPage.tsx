import React from 'react';
import useUser from '@/hooks/useUser';
import useUserMutation from '@/hooks/useUserMutation';
import { useNavigate } from 'react-router-dom';
import PageHeader from '@/components/public/PageHeader';
import SetupProfileInfo from '@/components/auth/signup/SetupProfileInfo';
import { PageLayout } from '@/styles/styles';
import GenericForm from '@/components/public/form/GenericForm';
import { EditUserInterface } from '@/types/user';

const EditProfileInfoPage = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { editUserHandler } = useUserMutation();

  return (
    <>
      <PageHeader title='개인정보 변경' onClick={() => navigate(-1)} />
      <PageLayout>
        <GenericForm<EditUserInterface>
          formOptions={{ mode: 'onChange' }}
          onSubmit={(data: EditUserInterface) => editUserHandler(data)}
        >
          <SetupProfileInfo user={user} />
        </GenericForm>
      </PageLayout>
    </>
  );
};

export default EditProfileInfoPage;
