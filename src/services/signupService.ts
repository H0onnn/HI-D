import { NavigateFunction } from 'react-router-dom';
import { SubmitHandler } from 'react-hook-form';
import { ProfileSetupDataInterface } from '../types/types';
import toast from 'react-hot-toast';

// 회원가입 스텝에서 다음 클릭 처리
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

// 회원가입 스텝에서 이전 클릭 처리
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

// 최종 스텝에서 회원가입 클릭 처리
export const signupSubmit: SubmitHandler<ProfileSetupDataInterface> = (data) => {
  try {
    console.log(data);
    toast.success('회원가입이 완료되었습니다!', {
      duration: 1500,
      position: 'top-center',
      id: 'signupSuccess',
    });
  } catch (error) {
    toast.error('회원가입에 실패하였습니다.', {
      duration: 1500,
      position: 'top-center',
      id: 'signupFail',
    });
  }
};

type RequiredAgreementsType = {
  termsOfService: boolean;
  emailSchoolAgreement: boolean;
  personalInfoAgreement: boolean;
  overFourteen: boolean;
};

// 약관 동의 스텝의 모두 선택 클릭 처리
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

// 약관 동의 스텝의 체크박스 클릭 처리
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

// 약관 동의 스텝의 필수 약관 모두 체크 여부 확인
export const allRequiredChecked = (requiredAgreements: RequiredAgreementsType) => {
  return Object.values(requiredAgreements).every((val) => val);
};

// 모달의 값 클릭시 Input에 값 적용
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
