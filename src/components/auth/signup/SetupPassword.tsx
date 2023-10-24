import React from 'react';
import { useFormContext } from 'react-hook-form';
import useSetupInput from '@/hooks/useSetupInput';
import MainComment from '../../public/MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { passwordValidation, passwordConfirmValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupPassword = ({ onNext }: ProfileSetupStepInterface) => {
  const { watch } = useFormContext();

  const passwordValue = watch('password');

  const {
    register: passwordRegister,
    errors: passwordErrors,
    status: passwordStatus,
  } = useSetupInput('password', passwordValidation);

  const {
    register: passwordConfirmRegister,
    errors: passwordConfirmErrors,
    status: passwordConfirmStatus,
  } = useSetupInput('passwordConfirm', passwordConfirmValidation(passwordValue));

  return (
    <>
      <MainComment
        style={{ fontSize: '20px' }}
        comment={`로그인시 사용할\n비밀번호를 입력해주세요`}
      />
      <InputWrapper style={{ marginBottom: '3rem' }}>
        <Input
          type='password'
          status={passwordStatus}
          {...passwordRegister('password', passwordValidation)}
          errorMessage={
            passwordErrors.password && typeof passwordErrors.password.message === 'string'
              ? passwordErrors.password.message
              : undefined
          }
          placeholder='비밀번호를 입력해주세요.'
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type='password'
          status={passwordConfirmStatus}
          {...passwordConfirmRegister('passwordConfirm')}
          errorMessage={
            passwordConfirmErrors.passwordConfirm &&
            typeof passwordConfirmErrors.passwordConfirm.message === 'string'
              ? passwordConfirmErrors.passwordConfirm.message
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
