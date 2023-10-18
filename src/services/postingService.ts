import { NavigateFunction } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { PostingDataInterface } from '@/types/posting';
import toast from 'react-hot-toast';
import { LINK } from '../constants/links';
import { httpClient } from '../api/httpClient';

export const postingNextClickHandler = (setStep: (step: string) => void, steps: string[]) => {
  return (currentStep: string, nextStep: string) => {
    const currentStepIndex = steps.indexOf(currentStep);
    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < steps.length) {
      setStep(nextStep);
    }
  };
};

export const postingPrevClickHandler = (
  setStep: (step: string) => void,
  steps: string[],
  navigate: NavigateFunction,
  currentRoute: string,
) => {
  return (currentStep: string) => {
    const isHelpPost = currentRoute === LINK.POSTING_HELP;
    const availableSteps = isHelpPost ? steps : steps.slice(1);

    const currentStepIndex = availableSteps.indexOf(currentStep);

    if (currentStepIndex === 0) {
      window.confirm('게시글 작성을 취소하시겠습니까?') && navigate(-1);
      return;
    }

    const prevStepIndex = currentStepIndex - 1;

    if (prevStepIndex >= 0) {
      setStep(availableSteps[prevStepIndex]);
    }
  };
};

export const postingSubmit: SubmitHandler<PostingDataInterface> = async (data) => {
  try {
    await httpClient.post.post.posting(data);
    toast.success('게시물이 등록되었어요.', {
      id: 'postingSuccess',
    });
  } catch (err: unknown) {
    toast.error('게시물 등록에 실패했어요.', {
      id: 'postingFail',
    });
  }
};
