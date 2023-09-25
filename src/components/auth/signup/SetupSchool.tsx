import React from 'react';
import { useFormContext } from 'react-hook-form';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { schoolValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupSchool = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const schoolValue = watch('school');

  const schoolStatus = errors.school
    ? 'error'
    : schoolValue && !errors.school
    ? 'success'
    : 'default';

  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학교를 선택해주세요' />
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
        <Button $isFullWidth onClick={onNext} disabled={schoolStatus !== 'success'}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupSchool;
