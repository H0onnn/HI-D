import { useState } from 'react';

type AgreementType = {
  termsOfService: boolean;
  emailSchoolAgreement: boolean;
  personalInfoAgreement: boolean;
  overFourteen: boolean;
};

export type AgreementKeys = keyof AgreementType;

const agreementsLabels: Record<AgreementKeys, string> = {
  termsOfService: '서비스 이용약관에 동의합니다.',
  emailSchoolAgreement: '이메일 수집 및 학교 정보 제공에 동의합니다.',
  personalInfoAgreement: '개인정보 수집 및 이용에 동의합니다.',
  overFourteen: '만 14세 이상입니다.',
};

const useAgreement = () => {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [agreements, setAgreements] = useState<AgreementType>({
    termsOfService: false,
    emailSchoolAgreement: false,
    personalInfoAgreement: false,
    overFourteen: false,
  });
  const [optionalAgreement, setOptionalAgreement] = useState<boolean>(false);

  const allAgreed = Object.values(agreements).every((val) => val);

  return {
    allChecked,
    setAllChecked,
    agreements,
    setAgreements,
    optionalAgreement,
    setOptionalAgreement,
    allAgreed,
    agreementsLabels,
  };
};

export default useAgreement;
