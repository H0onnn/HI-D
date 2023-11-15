import React from 'react';
import { FunnelProps, StepProps } from '../../../hooks/useFunnel';
import { SetupPageLayout } from '@/styles/styles';
import SetupSchool from './SetupSchool';
import SetupMajor from './SetupMajor';
import SetupProfileInfo from './SetupProfileInfo';
import SetupEmail from './SetupEmail';
import SetupPassword from './SetupPassword';
import CheckAgreement from './CheckAgreement';

export interface ProfileSetupInterface {
  steps: string[];
  nextClickHandler: (nextStep: string) => void;
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const ProfileSetup = ({ steps, nextClickHandler, Funnel, Step }: ProfileSetupInterface) => {
  return (
    <SetupPageLayout>
      <Funnel>
        <Step name='약관 동의'>
          <CheckAgreement onNext={() => nextClickHandler(steps[1])} />
        </Step>

        <Step name='학교 선택'>
          <SetupSchool onNext={() => nextClickHandler(steps[2])} isEdit={false} />
        </Step>

        <Step name='학과 선택'>
          <SetupMajor onNext={() => nextClickHandler(steps[3])} isEdit={false} />
        </Step>

        <Step name='이메일 인증'>
          <SetupEmail onNext={() => nextClickHandler(steps[4])} />
        </Step>

        <Step name='비밀번호 설정'>
          <SetupPassword onNext={() => nextClickHandler(steps[5])} />
        </Step>

        <Step name='프로필 설정'>
          <SetupProfileInfo />
        </Step>
      </Funnel>
    </SetupPageLayout>
  );
};

export default ProfileSetup;
