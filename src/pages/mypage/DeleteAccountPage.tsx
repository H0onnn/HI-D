import React from 'react';
import useDeleteAccount from '@/hooks/useMyPageActions';
import { useNavigate } from 'react-router-dom';
import { useFunnel } from '@/hooks/useFunnel';
import { handleNextClick, handlePrevClick } from '@/services/setupStep';
import { PageLayout } from '@/styles/styles';
import { DeleteUserInterface } from '@/types/user';
import PageHeader from '@/components/public/PageHeader';
import GenericForm from '@/components/public/form/GenericForm';
import SetupDelete from '@/components/mypage/actions/deleteAccount/SetupDelete';

const steps = ['탈퇴 동의', '비밀번호 확인'];
const confirmMessage = '회원탈퇴를 취소하시겠어요?';

const DeleteAccountPage = () => {
  const navigate = useNavigate();
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);
  const { deleteAccountHandler } = useDeleteAccount();

  const nextClickHandler = handleNextClick(setStep, steps);
  const prevClickHandler = handlePrevClick(setStep, steps, confirmMessage, navigate);

  return (
    <>
      <PageHeader title='계정 탈퇴' onClick={() => prevClickHandler(currentStep)} />
      <PageLayout>
        <GenericForm<DeleteUserInterface>
          formOptions={{
            mode: 'onChange',
            shouldUnregister: false,
          }}
          onSubmit={(data: DeleteUserInterface) => deleteAccountHandler(data)}
        >
          <SetupDelete
            steps={steps}
            Step={Step}
            Funnel={Funnel}
            nextClickHandler={nextClickHandler}
          />
        </GenericForm>
      </PageLayout>
    </>
  );
};

export default DeleteAccountPage;
