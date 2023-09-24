import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { schoolValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';

const SetupSchool = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useForm({ mode: 'onChange' });

  const schoolValue = watch('school');

  const schoolStatus = errors.school
    ? 'error'
    : schoolValue && !errors.school
    ? 'success'
    : 'default';

  return (
    <>
      <MainComment comment='학교를 선택해주세요' />
      <InputWrapper>
        <Input
          type='school'
          status={schoolStatus}
          {...register('school', schoolValidation)}
          errorMessage={
            errors.school && typeof errors.school.message === 'string'
              ? errors.school.message
              : undefined
          }
          placeholder='학교 이름을 검색해주세요.'
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupSchool;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  bottom: 7rem;
  left: 0;
  padding: 0 2rem;
`;
