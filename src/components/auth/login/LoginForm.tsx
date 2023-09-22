import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../public/Input';
import { LoginDataInterface } from '../../../types/types';
import Button from '../../public/Button';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { emailValidation, passwordValidation } from '../../../utils/auth/validationRules';
import CheckIcon from '../../public/UI/CheckIcon';
import WarningIcon from '../../public/UI/WarningIcon';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginDataInterface>({ mode: 'onChange' });

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
            image={
              emailError ? (
                <WarningIcon color={colors.error} />
              ) : emailValue ? (
                <CheckIcon color={colors.success} />
              ) : undefined
            }
            status={emailStatus}
            {...register('mail', emailValidation)}
            placeholder='이메일 주소를 입력해주세요.'
          />
          {errors.mail && <ErrorText>{errors.mail.message}</ErrorText>}
        </InputWrapper>

        <InputWrapper>
          <Input
            type='password'
            image={
              passwordError ? (
                <WarningIcon color={colors.error} />
              ) : passwordValue ? (
                <CheckIcon color={colors.success} />
              ) : undefined
            }
            status={passwordStatus}
            {...register('password', passwordValidation)}
            placeholder='비밀번호를 입력해주세요.'
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
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
  bottom: 18rem;
  left: 0;
  padding: 0 1rem;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: ${colors.error};
  position: absolute;
  bottom: -2rem;
`;
