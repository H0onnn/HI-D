import { useState } from 'react';

type UseProgressReturnType = {
  currentStep: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
  progressStep: () => number;
  initialProgress: number;
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
    console.log('currentStepIndex: ', currentStepIndex);
    console.log('nextStepIndex: ', nextStepIndex);

    if (nextStepIndex < steps.length) {
      setCurrentStep(steps[nextStepIndex]);
    }

    const totalSteps = getTotalSteps();
    return ((nextStepIndex + 1) / totalSteps) * 100;
  };

  const initialProgress = (1 / steps.length) * 100;

  return {
    currentStep,
    setCurrentStep,
    progressStep,
    initialProgress,
  };
};

export default useProgress;
