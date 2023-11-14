import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProgress from '@/hooks/useProgress';
import { useFunnel } from '@/hooks/useFunnel';
import useSignup from '@/hooks/useSignup';
import ProfileSetup from '@/components/auth/signup/ProfileSetup';
import PageHeader from '@/components/public/PageHeader';
import SignupProgressBar from '@/components/auth/signup/SignupProgressBar';
import GenericForm from '@/components/public/form/GenericForm';
import { PageLayout } from '@/styles/styles';
import { handleNextClick, handlePrevClick } from '@/services/signup';
import { ProfileSetupDataInterface } from '@/types/types';

const steps = [
  '약관 동의',
  '학교 선택',
  '학과 선택',
  '이메일 인증',
  '비밀번호 설정',
  '프로필 설정',
];

const SignUpPage = () => {
  const navigate = useNavigate();
  const { submitSignup } = useSignup();
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  const { currentStep, setCurrentStep, initialProgress, getCurrentStepIndex } = useProgress(steps);
  const [progress, setProgress] = useState<number>(initialProgress);

  const nextClickHandler = handleNextClick(
    getCurrentStepIndex,
    steps,
    setStep,
    setCurrentStep,
    setProgress,
  );

  const prevClickHandler = handlePrevClick(
    getCurrentStepIndex,
    steps,
    setStep,
    setCurrentStep,
    setProgress,
    navigate,
  );

  return (
    <>
      <PageHeader title='회원가입' onClick={prevClickHandler} />
      <PageLayout>
        <GenericForm<ProfileSetupDataInterface>
          formOptions={{ mode: 'onChange' }}
          onSubmit={submitSignup}
        >
          {currentStep !== '약관 동의' && <SignupProgressBar progress={progress} />}
          <ProfileSetup
            steps={steps}
            nextClickHandler={nextClickHandler}
            Funnel={Funnel}
            Step={Step}
          />
        </GenericForm>
      </PageLayout>
    </>
  );
};

export default SignUpPage;
