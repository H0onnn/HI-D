import { NavigateFunction } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { ProfileSetupDataInterface } from '../types/types';
import toast from 'react-hot-toast';
import { LINK } from '../constants/links';
import { httpClient } from '../api/httpClient';

type RequiredAgreementsType = {
  termsOfService: boolean;
  emailSchoolAgreement: boolean;
  personalInfoAgreement: boolean;
  overFourteen: boolean;
};

const navigateOrSetStep = (
  index: number,
  steps: string[],
  setStep: (step: string) => void,
  setCurrentStep: (step: string) => void,
  setProgress: (progress: number) => void,
  message?: string,
  navigateFn?: NavigateFunction,
) => {
  if (index < 0 && message && navigateFn) {
    window.confirm(message) && navigateFn(-1);
    return;
  }

  if (index >= 0 && index < steps.length) {
    const nextStep = steps[index];
    setStep(nextStep);
    setCurrentStep(nextStep);
    setProgress(((index + 1) / steps.length) * 100);
  }
};

export const handleNextClick =
  (
    getCurrentStepIndex: () => number,
    steps: string[],
    setStep: (step: string) => void,
    setCurrentStep: (step: string) => void,
    setProgress: (progress: number) => void,
  ) =>
  () => {
    const nextIndex = getCurrentStepIndex() + 1;
    navigateOrSetStep(nextIndex, steps, setStep, setCurrentStep, setProgress);
  };

export const handlePrevClick =
  (
    getCurrentStepIndex: () => number,
    steps: string[],
    setStep: (step: string) => void,
    setCurrentStep: (step: string) => void,
    setProgress: (progress: number) => void,
    navigate: NavigateFunction,
  ) =>
  () => {
    const prevIndex = getCurrentStepIndex() - 1;
    const cancelMessage = '정말로 회원가입을 취소하시겠습니까?';
    navigateOrSetStep(
      prevIndex,
      steps,
      setStep,
      setCurrentStep,
      setProgress,
      cancelMessage,
      navigate,
    );
  };

const toggleAllAgreements = (
  allChecked: boolean,
  setRequiredAgreements: React.Dispatch<React.SetStateAction<RequiredAgreementsType>>,
  setOptionalAgreement: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const newValue = !allChecked;
  setRequiredAgreements({
    termsOfService: newValue,
    emailSchoolAgreement: newValue,
    personalInfoAgreement: newValue,
    overFourteen: newValue,
  });
  setOptionalAgreement(newValue);
};

export const handleAllCheckToggle =
  (
    allChecked: boolean,
    setAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
    setRequiredAgreements: React.Dispatch<React.SetStateAction<RequiredAgreementsType>>,
    setOptionalAgreement: React.Dispatch<React.SetStateAction<boolean>>,
  ) =>
  () => {
    setAllChecked(!allChecked);
    toggleAllAgreements(allChecked, setRequiredAgreements, setOptionalAgreement);
  };

export const handleCheckboxToggle =
  (setRequiredAgreements: React.Dispatch<React.SetStateAction<RequiredAgreementsType>>) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequiredAgreements((prev) => ({
      ...prev,
      [e.target.name]: e.target.checked,
    }));
  };

export const allRequiredAgreed = (requiredAgreements: RequiredAgreementsType) => {
  return Object.values(requiredAgreements).every((val) => val);
};

export const applyKeywordToField = (
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

export const signupSubmit: SubmitHandler<ProfileSetupDataInterface> = async (data) => {
  try {
    await httpClient.members.post.signUp(data);
    window.location.href = LINK.SIGNUP_SUCCESS;
    toast.success('회원가입이 완료되었습니다!', {
      id: 'signupSuccess',
    });
  } catch (err: unknown) {
    toast.error('회원가입에 실패하였습니다.', {
      id: 'signupFail',
    });
  }
};
