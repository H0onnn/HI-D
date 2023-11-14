import React from 'react';
import { FunnelProps, StepProps } from '@/hooks/useFunnel';
import { SetupPageLayout } from '@/styles/styles';
import AgreeDelete from './steps/AgreeDelete';
import CheckPassword from './steps/CheckPassword';

interface SetupDeleteInterface {
  steps: string[];
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
  nextClickHandler: (currentStep: string, nextStep: string) => void;
}

const SetupDelete = ({ steps, Step, Funnel, nextClickHandler }: SetupDeleteInterface) => {
  return (
    <SetupPageLayout>
      <Funnel>
        <Step name='탈퇴 동의'>
          <AgreeDelete onNext={() => nextClickHandler(steps[0], steps[1])} />
        </Step>
        <Step name='비밀번호 확인'>
          <CheckPassword />
        </Step>
      </Funnel>
    </SetupPageLayout>
  );
};

export default SetupDelete;
