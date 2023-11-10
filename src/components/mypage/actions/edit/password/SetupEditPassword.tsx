import React from 'react';
import useSetupInput from '@/hooks/useSetupInput';
import MainComment from '@/components/public/MainComment';
import Input from '@/components/public/Input';
import Button from '@/components/public/Button';
import { InputWrapper, ButtonContainer } from '@/styles/styles';
import { passwordValidation, passwordConfirmValidation } from '@/utils/auth/validationRules';

const SetupEditPassword = () => {
  const {
    register: passwordRegister,
    errors: passwordErrors,
    status: passwordStatus,
  } = useSetupInput('password', passwordValidation, 'default');

  const {
    register: newPasswordRegister,
    errors: newPasswordErrors,
    status: newPasswordStatus,
    watch: newPasswordWatch,
  } = useSetupInput('newPassword', passwordValidation, 'default');

  const newPasswordValue = newPasswordWatch('newPassword');

  const {
    register: newPasswordConfirmRegister,
    errors: newPasswordConfirmErrors,
    status: newPasswordConfirmStatus,
  } = useSetupInput('newPasswordConfirm', passwordConfirmValidation(newPasswordValue), 'default');

  return (
    <>
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
          placeholder='기존 비밀번호'
        />
      </InputWrapper>
      <MainComment style={{ fontSize: '20px', marginTop: '3rem' }} comment='비밀번호 변경' />
      <InputWrapper style={{ marginBottom: '3rem' }}>
        <Input
          type='password'
          status={newPasswordStatus}
          {...newPasswordRegister('newPassword')}
          errorMessage={
            newPasswordErrors.newPassword &&
            typeof newPasswordErrors.newPassword.message === 'string'
              ? newPasswordErrors.newPassword.message
              : undefined
          }
          placeholder='새 비밀번호'
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type='password'
          status={newPasswordConfirmStatus}
          {...newPasswordConfirmRegister('newPasswordConfirm')}
          errorMessage={
            newPasswordConfirmErrors.newPasswordConfirm &&
            typeof newPasswordConfirmErrors.newPasswordConfirm.message === 'string'
              ? newPasswordConfirmErrors.newPasswordConfirm.message
              : undefined
          }
          placeholder='새 비밀번호 확인'
        />
      </InputWrapper>
      <ButtonContainer>
        <Button type='submit' $isFullWidth disabled={newPasswordConfirmStatus !== 'success'}>
          변경하기
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupEditPassword;
