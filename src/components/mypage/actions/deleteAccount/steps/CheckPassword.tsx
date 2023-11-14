import React from 'react';
import useSetupInput from '@/hooks/useSetupInput';
import MainComment from '@/components/public/MainComment';
import Input from '@/components/public/Input';
import Button from '@/components/public/Button';
import { ButtonContainer, InputWrapper } from '@/styles/styles';
import { passwordValidation } from '@/utils/auth/validationRules';

const CheckPassword = () => {
  const {
    register: passwordRegister,
    errors: passwordErrors,
    status: passwordStatus,
  } = useSetupInput('password', passwordValidation, 'default');

  return (
    <div>
      <MainComment style={{ fontSize: '20px' }} comment='비밀번호 확인' />
      <InputWrapper>
        <Input
          type='password'
          status={passwordStatus}
          {...passwordRegister('password')}
          errorMessage={
            passwordErrors.password && typeof passwordErrors.password.message === 'string'
              ? passwordErrors.password.message
              : undefined
          }
          placeholder='비밀번호를 입력해주세요.'
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth disabled={passwordStatus !== 'success'}>
          탈퇴하기
        </Button>
      </ButtonContainer>
    </div>
  );
};

export default CheckPassword;
