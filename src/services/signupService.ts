import { NavigateFunction } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { ProfileSetupDataInterface } from '../types/types';

export const createNextClickHandler = (
  setStep: (step: string) => void,
  setCurrentStep: (step: string) => void,
  getCurrentStepIndex: () => number,
  steps: string[],
  setProgress: (progress: number) => void,
) => {
  return (nextStep: string) => {
    const currentStepIndex = getCurrentStepIndex();
    const nextStepIndex = currentStepIndex + 1;

    if (nextStepIndex < steps.length) {
      setStep(nextStep);
      setCurrentStep(steps[nextStepIndex]);
      const newProgress = ((nextStepIndex + 1) / steps.length) * 100;
      setProgress(newProgress);
    }
  };
};

export const createPrevClickHandler = (
  setStep: (step: string) => void,
  setCurrentStep: (step: string) => void,
  getCurrentStepIndex: () => number,
  navigate: NavigateFunction,
  steps: string[],
  setProgress: (progress: number) => void,
) => {
  return () => {
    const currentStepIndex = getCurrentStepIndex();
    const prevStepIndex = currentStepIndex - 1;

    if (currentStepIndex === 0) {
      window.confirm('정말로 회원가입을 취소하시겠습니까?') && navigate(-1);
    } else if (prevStepIndex >= 0) {
      setStep(steps[prevStepIndex]);
      setCurrentStep(steps[prevStepIndex]);
      setProgress(((prevStepIndex + 1) / steps.length) * 100);
    }
  };
};

export const signupSubmit: SubmitHandler<ProfileSetupDataInterface> = (data) => console.log(data);

type RequiredAgreementsType = {
  termsOfService: boolean;
  emailSchoolAgreement: boolean;
  personalInfoAgreement: boolean;
  overFourteen: boolean;
};

export const createAllCheckHandler = (
  allChecked: boolean,
  setAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
  setRequiredAgreements: React.Dispatch<React.SetStateAction<RequiredAgreementsType>>,
  setOptionalAgreement: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  return () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setRequiredAgreements({
      termsOfService: newValue,
      emailSchoolAgreement: newValue,
      personalInfoAgreement: newValue,
      overFourteen: newValue,
    });
    setOptionalAgreement(newValue);
  };
};

export const createCheckboxClickHandler = (
  setRequiredAgreements: React.Dispatch<React.SetStateAction<RequiredAgreementsType>>,
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequiredAgreements((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };
};

export const allRequiredChecked = (requiredAgreements: RequiredAgreementsType) => {
  return Object.values(requiredAgreements).every((val) => val);
};

export const keywordSelectHandler = (
  fieldName: string,
  keyword: string,
  setValue: (
    name: string,
    value: string,
    options?: Partial<{ shouldValidate: boolean; shouldDirty: boolean }>,
  ) => void,
  onBlur: () => void,
) => {
  setValue(fieldName, keyword, { shouldValidate: true });
  onBlur();
};
