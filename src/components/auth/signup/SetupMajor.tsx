import React from 'react';
import { useFormContext } from 'react-hook-form';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { majorValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupMajor = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const majorValue = watch('major');

  const majorStatus = errors.major ? 'error' : majorValue && !errors.major ? 'success' : 'default';

  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학과를 선택해주세요' />
      <InputWrapper>
        <Input
          type='major'
          status={majorStatus}
          {...register('major', majorValidation)}
          errorMessage={
            errors.major && typeof errors.major.message === 'string'
              ? errors.major.message
              : undefined
          }
          placeholder='학과 이름을 검색해주세요.'
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={majorStatus !== 'success'}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupMajor;
