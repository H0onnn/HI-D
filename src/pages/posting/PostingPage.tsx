import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFunnel } from '@/hooks/useFunnel';
import { PageLayout } from '@/styles/styles';
import PageHeader from '@/components/public/PageHeader';
import PostingForm from '@/components/posting/PostingForm';
import PostingSetup from '@/components/posting/PostingSetup';
import { handleNextClick, handlePrevClick, submitPosting } from '@/services/postingService';
import { LINK } from '@/constants/links';

const PostingPage = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const currentPath = location.pathname;

  const isHelpPost = currentPath === LINK.POSTING_HELP;
  const isFreePost = currentPath === LINK.POSTING_FREE;

  const steps = ['계열 선택', '게시글 작성'];
  const defaultStep = isHelpPost ? steps[0] : steps[1];

  const { Funnel, Step, setStep, currentStep } = useFunnel(defaultStep);

  const nextClickHandler = handleNextClick(setStep, steps);

  const prevClickHandler = handlePrevClick(setStep, steps, navigate, currentPath);

  return (
    <>
      <PageHeader title='게시글 작성' onClick={() => prevClickHandler(currentStep)} />
      <PageLayout>
        <PostingForm onSubmit={submitPosting}>
          <PostingSetup
            steps={steps}
            Funnel={Funnel}
            Step={Step}
            nextClickHandler={nextClickHandler}
            isFreePost={isFreePost}
            isHelpPost={isHelpPost}
          />
        </PostingForm>
      </PageLayout>
    </>
  );
};

export default PostingPage;
