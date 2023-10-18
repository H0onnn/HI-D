import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import Button from '../public/Button';
import { ButtonContainer } from '@/styles/styles';
import SelectMajorList from './SelectMajorList';

interface SelectMajorInterface {
  onNext: () => void;
  currentMajor: string | null;
  setCurrentMajor: React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectMajor = ({ onNext, currentMajor, setCurrentMajor }: SelectMajorInterface) => {
  return (
    <>
      <TitleContainer>
        <MainTitle>질문과 관련된 전공을 선택해주세요</MainTitle>
        <SubTitle>유용한 정보를 매칭해 드릴게요</SubTitle>
      </TitleContainer>
      <SelectMajorList onMajorSelect={setCurrentMajor} />
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={!currentMajor}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SelectMajor;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  line-height: 30px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.gray5};
  line-height: 24px;
`;
