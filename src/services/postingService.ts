import { NavigateFunction } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { PostingDataInterface } from '@/types/posting';
import toast from 'react-hot-toast';
import { LINK } from '../constants/links';
import { httpClient } from '../api/httpClient';

const getCurrentStepIndex = (currentStep: string, steps: string[]) => {
  return steps.indexOf(currentStep);
};

const getNextStepIndex = (currentStep: string, steps: string[]) => {
  const currentStepIndex = getCurrentStepIndex(currentStep, steps);
  return currentStepIndex + 1;
};

const getPrevStepIndex = (currentStep: string, steps: string[]) => {
  const currentStepIndex = getCurrentStepIndex(currentStep, steps);
  return currentStepIndex - 1;
};

const shouldNavigateAway = (currentStep: string, steps: string[], currentRoute: string) => {
  const isHelpPost = currentRoute === LINK.POSTING_HELP;
  const availableSteps = isHelpPost ? steps : steps.slice(1);
  const currentStepIndex = availableSteps.indexOf(currentStep);

  return currentStepIndex === 0 && window.confirm('게시글 작성을 취소하시겠습니까?');
};

export const handleNextClick = (setStep: (step: string) => void, steps: string[]) => {
  return (currentStep: string) => {
    const nextStepIndex = getNextStepIndex(currentStep, steps);

    if (nextStepIndex < steps.length) {
      setStep(steps[nextStepIndex]);
    }
  };
};

export const handlePrevClick = (
  setStep: (step: string) => void,
  steps: string[],
  navigate: NavigateFunction,
  currentRoute: string,
) => {
  return (currentStep: string) => {
    if (shouldNavigateAway(currentStep, steps, currentRoute)) {
      navigate(-1);
      return;
    }

    const prevStepIndex = getPrevStepIndex(currentStep, steps);

    if (prevStepIndex >= 0) {
      setStep(steps[prevStepIndex]);
    }
  };
};

export const submitPosting = (
  type: 'needhelp' | 'free',
  navigate: NavigateFunction,
): SubmitHandler<PostingDataInterface> => {
  return async (data) => {
    try {
      const response =
        type === 'needhelp'
          ? await httpClient.post.post.needhelp(data)
          : await httpClient.post.post.free(data);

      const postId = response.data.postId;
      toast.success('게시물이 등록되었어요.', {
        id: 'postingSuccess',
      });

      navigate(LINK.POST_DETAIL.replace(':id', postId.toString()));
    } catch (err: unknown) {
      toast.error('게시물 등록에 실패했어요.', {
        id: 'postingFail',
      });
    }
  };
};
