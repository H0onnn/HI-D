import { NavigateFunction } from 'react-router-dom';
import { PostingDataInterface } from '@/types/posting';
import { httpClient } from '../api/httpClient';
import { LINK } from '@/constants/links';
import { PostDetailInterface } from '@/types/post';

export const postNeedHelp = async (data: PostingDataInterface): Promise<PostDetailInterface> => {
  try {
    const response = await httpClient.post.post.needhelp(data);

    return response.data;
  } catch (err: unknown) {
    console.error('게시글 등록 오류 : ', err);
    throw err;
  }
};

export const postFree = async (data: PostingDataInterface): Promise<PostDetailInterface> => {
  try {
    const response = await httpClient.post.post.free(data);

    return response.data;
  } catch (err: unknown) {
    console.error('게시글 등록 오류 : ', err);
    throw err;
  }
};

export const patchPost = async (postId: number, data: PostingDataInterface): Promise<void> => {
  try {
    await httpClient.post.patch.edit(postId, data);
  } catch (err: unknown) {
    console.error('게시글 수정 오류 : ', err);
    throw err;
  }
};

const getCurrentStepIndex = (currentStep: string, steps: string[]) => steps.indexOf(currentStep);

const getNextStepIndex = (currentStep: string, steps: string[]) =>
  getCurrentStepIndex(currentStep, steps) + 1;

const getPrevStepIndex = (currentStep: string, steps: string[]) =>
  getCurrentStepIndex(currentStep, steps) - 1;

const shouldNavigateAway = (
  currentStep: string,
  steps: string[],
  confirmMessage: string,
  navigate: NavigateFunction,
  currentPath?: string,
) => {
  const isHelpPost = currentPath === LINK.POSTING_HELP;
  const availableSteps = isHelpPost ? steps : steps.slice(1);
  const currentStepIndex = availableSteps.indexOf(currentStep);
  const isFirstStep = currentStepIndex === 0;

  if (isFirstStep && window.confirm(confirmMessage)) {
    navigate(LINK.MAIN);
    return true;
  }

  return false;
};

export const handleNextClick =
  (setStep: (step: string) => void, steps: string[]) => (currentStep: string) => {
    const nextStepIndex = getNextStepIndex(currentStep, steps);
    if (nextStepIndex < steps.length) {
      setStep(steps[nextStepIndex]);
    }
  };

export const handlePrevClick =
  (
    setStep: (step: string) => void,
    steps: string[],
    confirmMessage: string,
    navigate: NavigateFunction,
    currentPath?: string,
  ) =>
  (currentStep: string) => {
    if (shouldNavigateAway(currentStep, steps, confirmMessage, navigate, currentPath)) {
      return;
    }

    const prevStepIndex = getPrevStepIndex(currentStep, steps);
    if (prevStepIndex >= 0) {
      setStep(steps[prevStepIndex]);
    }
  };
