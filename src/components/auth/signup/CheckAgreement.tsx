import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import Button from '../../public/Button';
import { ProfileSetupStepInterface } from '../../../types/types';
import MainComment from '../MainComment';
import { ButtonContainer } from '../../../styles/styles';
import Checkbox from '../../public/CheckBox';
import {
  createAllCheckHandler,
  createCheckboxClickHandler,
  allRequiredChecked,
} from '../../../services/signupService';

const CheckAgreement = ({ onNext }: ProfileSetupStepInterface) => {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [requiredAgreements, setRequiredAgreements] = useState({
    termsOfService: false,
    emailSchoolAgreement: false,
    personalInfoAgreement: false,
    overFourteen: false,
  });

  const allCheckedClickHandler = createAllCheckHandler(
    allChecked,
    setAllChecked,
    setRequiredAgreements,
  );
  const checkboxClickHandler = createCheckboxClickHandler(setRequiredAgreements);
  const areAllRequiredChecked = allRequiredChecked(requiredAgreements);

  return (
    <>
      <LogoWrapper />
      <MainComment
        style={{ fontSize: '20px' }}
        comment={`과끼리 서비스 이용을
위한 약관에 동의해주세요`}
      />
      <AgreementComment>정보 매칭 전에 가입 및 정보 제공에 동의해주세요.</AgreementComment>
      <div
        style={{
          borderBottom: `1px solid ${colors.lineGray}`,
          padding: '0.5rem 0',
        }}
      >
        <Checkbox
          text='아래 약관에 모두 동의합니다. (선택 정보 포함)'
          checked={allChecked}
          onChange={allCheckedClickHandler}
          textStyle={{ fontWeight: 'bold' }}
        />
      </div>
      <CheckBoxContainer>
        <Checkbox
          text='이용 약관에 동의합니다. (필수)'
          checked={requiredAgreements.termsOfService}
          onChange={checkboxClickHandler}
          name='termsOfService'
        />
        <Checkbox
          text='이메일 및 학교 정보 제공에 동의합니다. (필수)'
          checked={requiredAgreements.emailSchoolAgreement}
          onChange={checkboxClickHandler}
          name='emailSchoolAgreement'
        />
        <Checkbox
          text='본인의 정보를 이용해 가입하겠습니다. (필수)'
          checked={requiredAgreements.personalInfoAgreement}
          onChange={checkboxClickHandler}
          name='personalInfoAgreement'
        />
        <Checkbox
          text='만 14세 이상입니다. (필수)'
          checked={requiredAgreements.overFourteen}
          onChange={checkboxClickHandler}
          name='overFourteen'
        />
        <Checkbox
          text='광고성 정보 및 마케팅 활용에 동의합니다. (선택)'
          onChange={checkboxClickHandler}
        />
      </CheckBoxContainer>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={!areAllRequiredChecked}>
          동의하기
        </Button>
      </ButtonContainer>
    </>
  );
};

export default CheckAgreement;

const AgreementComment = styled.p`
  font-size: 16px;
  color: #c8c8c8;
  margin-top: -1rem;
  margin-bottom: 6rem;
`;

const LogoWrapper = styled.div`
  width: 14rem;
  height: 6rem;
  background-color: ${colors.primary};
  border-radius: 100%;
  margin-bottom: 2rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;
