import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../public/Input';
import { LoginDataInterface } from '../../../types/types';
import Button from '../../public/Button';
import styled from 'styled-components';
import { emailValidation, passwordValidation } from '../../../utils/auth/validationRules';
import { InputWrapper } from '../../../styles/styles';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginDataInterface>({ mode: 'onChange' });

  // TODO : 회원기입 폼에서도 validation에 따른 status 전달이 필요할 것이기 때문에 로직 분리 필요
  const emailError = errors.mail;
  const passwordError = errors.password;

  const emailValue = watch('mail');
  const passwordValue = watch('password');

  const emailStatus = emailError ? 'error' : emailValue && !emailError ? 'success' : 'default';
  const passwordStatus = passwordError
    ? 'error'
    : passwordValue && !passwordError
    ? 'success'
    : 'default';

  const loginSubmit: SubmitHandler<LoginDataInterface> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <InputContainer>
        <InputWrapper>
          <Input
            type='email'
            status={emailStatus}
            errorMessage={errors.mail ? errors.mail.message : undefined}
            {...register('mail', emailValidation)}
            placeholder='이메일 주소를 입력해주세요.'
          />
        </InputWrapper>

        <InputWrapper>
          <Input
            type='password'
            status={passwordStatus}
            errorMessage={errors.password ? errors.password.message : undefined}
            {...register('password', passwordValidation)}
            placeholder='비밀번호를 입력해주세요.'
          />
        </InputWrapper>
      </InputContainer>
      <ButtonContainer>
        <Button $isFullWidth type='submit'>
          로그인
        </Button>
      </ButtonContainer>
    </form>
  );
};

export default LoginForm;

const InputContainer = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin-bottom: 4rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  bottom: 18rem;
  left: 0;
  padding: 0 1rem;
`;
