import { useState } from 'react';

type UseProgressReturnType = {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  progressStep: () => number;
  initialProgress: number;
  getCurrentStepIndex: () => number;
};

const useProgress = (steps: string[]): UseProgressReturnType => {
  const [currentStep, setCurrentStep] = useState<string>(steps[0]);

  const getCurrentStepIndex = (): number => {
    return steps.indexOf(currentStep);
  };

  const getTotalSteps = (): number => {
    return steps.length;
  };

  const progressStep = (): number => {
    const currentStepIndex = getCurrentStepIndex();
    const nextStepIndex = currentStepIndex + 1;

    const totalSteps = getTotalSteps();
    return ((nextStepIndex + 1) / totalSteps) * 100;
  };

  const initialProgress = (1 / steps.length) * 100;

  return {
    currentStep,
    setCurrentStep,
    progressStep,
    initialProgress,
    getCurrentStepIndex,
  };
};

export default useProgress;
