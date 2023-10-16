import React from 'react';
import { FunnelProps, StepProps } from '@/hooks/useFunnel';
import { SetupPageLayout } from '@/styles/styles';
import SelectMajor from './SelectMajor';

interface PostingSetupInterface {
  steps: string[];
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
}

const PostingSetup = ({ Funnel, Step }: PostingSetupInterface) => {
  return (
    <SetupPageLayout>
      <Funnel>
        <Step name='계열 선택'>
          <SelectMajor />
        </Step>
        <Step name='게시글 작성'>
          <div>게시글 작성</div>
        </Step>
      </Funnel>
    </SetupPageLayout>
  );
};

export default PostingSetup;
