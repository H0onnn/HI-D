import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAuthStore from '../../../store/authStore';
import { useNavigate } from 'react-router-dom';
import Input from '../../public/Input';
import { LoginDataInterface } from '../../../types/types';
import Button from '../../public/Button';
import styled from 'styled-components';
import { emailValidation, passwordValidation } from '../../../utils/auth/validationRules';
import { InputWrapper } from '../../../styles/styles';
import { httpClient } from '../../../api/httpClient';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginDataInterface>({ mode: 'onChange' });

  const setToken = useAuthStore((state) => state.setToken);

  const navigate = useNavigate();

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

  const loginSubmit: SubmitHandler<LoginDataInterface> = async (data) => {
    try {
      const res = await httpClient.members.post.login(data);
      const token = res.headers['authorization'];

      if (token) {
        setToken(token);
        navigate(LINK.MAIN);
        toast.success('로그인 되었습니다.', { id: 'login-success' });
        return;
      }

      toast.error('로그인에 실패하였습니다.', { id: 'login-fail' });
    } catch (err: unknown) {
      toast.error('로그인 중 오류가 발생했습니다.', { id: 'login-server-fail' });
    }
  };

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
      <Button $isFullWidth type='submit'>
        로그인
      </Button>
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
