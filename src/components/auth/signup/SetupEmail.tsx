import React from 'react';
import { useFormContext } from 'react-hook-form';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { emailValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupEmail = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const emailValue = watch('email');

  const emailStatus = errors.email ? 'error' : emailValue && !errors.email ? 'success' : 'default';

  return (
    <>
      <MainComment
        style={{ fontSize: '20px' }}
        comment={`학교계정 이메일을 입력 후
이메일을 인증해주세요 :)`}
      />
      <InputWrapper>
        <Input
          type='email'
          status={emailStatus}
          {...register('email', emailValidation)}
          errorMessage={
            errors.email && typeof errors.email.message === 'string'
              ? errors.email.message
              : undefined
          }
          placeholder='이메일을 입력해주세요.'
          button
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={emailStatus !== 'success'}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupEmail;
