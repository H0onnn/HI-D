import { NavigateFunction } from 'react-router-dom';
import { LINK } from '@/constants/links';

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

const shouldNavigateAway = (
  currentStep: string,
  steps: string[],
  confirmMessage: string,
  navigate: NavigateFunction,
  currentPath?: string,
) => {
  const isHelpPost = currentPath === LINK.POSTING_HELP;
  const currentStepIndex = steps.indexOf(currentStep);
  const isFirstStep = currentStepIndex === 0 || (isHelpPost && currentStepIndex === 1);

  if (
    (isHelpPost && isFirstStep && window.confirm(confirmMessage)) ||
    (!isHelpPost && currentStepIndex === 0 && window.confirm(confirmMessage))
  ) {
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
