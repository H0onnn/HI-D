import React, { useState } from 'react';
import { FunnelProps, StepProps } from '@/hooks/useFunnel';
import { SetupPageLayout } from '@/styles/styles';
import SelectMajor from './SelectMajor';
import WritePost from './WritePost';

interface PostingSetupInterface {
  steps: string[];
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
  nextClickHandler: (currentStep: string, nextStep: string) => void;
  isHelpPost: boolean;
  isFreePost: boolean;
}

const PostingSetup = ({
  steps,
  Funnel,
  Step,
  nextClickHandler,
  isFreePost,
  isHelpPost,
}: PostingSetupInterface) => {
  const [currentMajor, setCurrentMajor] = useState<string | null>(null);

  return (
    <SetupPageLayout>
      <Funnel>
        {isHelpPost ? (
          <Step name='계열 선택'>
            <SelectMajor
              currentMajor={currentMajor}
              setCurrentMajor={setCurrentMajor}
              onNext={() => nextClickHandler(steps[0], steps[1])}
            />
          </Step>
        ) : (
          <></>
        )}
        <Step name='게시글 작성'>
          <WritePost major={currentMajor} isHelpPost={isHelpPost} isFreePost={isFreePost} />
        </Step>
      </Funnel>
    </SetupPageLayout>
  );
};

export default PostingSetup;
