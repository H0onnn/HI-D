import React from 'react';
import { useFormContext } from 'react-hook-form';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { passwordValidation, passwordConfirmValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupPassword = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const passwordValue = watch('password');
  const passwordConfirmValue = watch('passwordConfirm');

  const passwordStatus = errors.password
    ? 'error'
    : passwordValue && !errors.password
    ? 'success'
    : 'default';

  const passwordConfirmStatus = errors.passwordConfirm
    ? 'error'
    : passwordConfirmValue && !errors.passwordConfirm
    ? 'success'
    : 'default';

  return (
    <>
      <MainComment
        style={{ fontSize: '20px' }}
        comment={`로그인시 사용할
비밀번호를 입력해주세요`}
      />
      <InputWrapper style={{ marginBottom: '3rem' }}>
        <Input
          type='password'
          status={passwordStatus}
          {...register('password', passwordValidation)}
          errorMessage={
            errors.password && typeof errors.password.message === 'string'
              ? errors.password.message
              : undefined
          }
          placeholder='비밀번호를 입력해주세요.'
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type='password'
          status={passwordConfirmStatus}
          {...register('passwordConfirm', passwordConfirmValidation(passwordValue))}
          errorMessage={
            errors.passwordConfirm && typeof errors.passwordConfirm.message === 'string'
              ? errors.passwordConfirm.message
              : undefined
          }
          placeholder='비밀번호를 다시 입력해주세요.'
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={passwordConfirmStatus !== 'success'}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupPassword;
