import React from 'react';
import useAgreement from '@/hooks/useAgreement';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Button from '../../public/Button';
import Checkbox from '../../public/CheckBox';
import MainComment from '../../public/MainComment';
import { ProfileSetupStepInterface } from '@/types/types';
import { ButtonContainer } from '../../../styles/styles';
import { AgreementKeys } from '@/hooks/useAgreement';
import MAIN_LOGO from '@/public/images/main_logo.svg';

const CheckAgreement = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    allChecked,
    setAllChecked,
    agreements,
    setAgreements,
    optionalAgreement,
    setOptionalAgreement,
    allAgreed,
    agreementsLabels,
  } = useAgreement();

  const handleAllCheckToggle = () => {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setAgreements({
      termsOfService: newValue,
      emailSchoolAgreement: newValue,
      personalInfoAgreement: newValue,
      overFourteen: newValue,
    });
    setOptionalAgreement(newValue);
  };

  const handleCheckboxToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAgreements((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <>
      <LogoBox>
        <LogoImage src={MAIN_LOGO} alt='logo' />
      </LogoBox>
      <MainComment
        style={{ fontSize: '24px' }}
        comment={`하이디 서비스 이용을
        위한 약관에 동의해주세요`}
      />
      <AgreementComment>정보 매칭 전에 가입 및 정보 제공에 동의해주세요.</AgreementComment>
      <Checkbox
        text='아래 약관에 모두 동의합니다. (선택 정보 포함)'
        checked={allChecked}
        onChange={handleAllCheckToggle}
        textStyle={{ fontWeight: 'bold' }}
      />
      <Divider />
      <CheckBoxContainer>
        {Object.entries(agreements).map(([key, value]) => (
          <Checkbox
            key={key}
            text={`${agreementsLabels[key as AgreementKeys]} (필수)`}
            name={key}
            checked={value}
            onChange={handleCheckboxToggle}
          />
        ))}
        <Checkbox
          text='광고성 정보 및 마케팅 활용에 동의합니다. (선택)'
          checked={optionalAgreement}
          onChange={() => setOptionalAgreement((prev) => !prev)}
        />
      </CheckBoxContainer>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={!allAgreed}>
          동의하기
        </Button>
      </ButtonContainer>
    </>
  );
};

export default CheckAgreement;

const Divider = styled.div`
  border-bottom: 1px solid ${colors.lineGray};
  padding: 0.5rem 0;
`;

const AgreementComment = styled.p`
  font-size: 16px;
  color: #c8c8c8;
  margin-top: -1rem;
  margin-bottom: 6rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const LogoBox = styled.div`
  width: 10rem;
  height: 6rem;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;
