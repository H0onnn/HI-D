import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Input from '../../public/Input';
import { LoginDataInterface } from '../../../types/types';
import Button from '../../public/Button';
import styled from 'styled-components';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDataInterface>();

  const loginSubmit: SubmitHandler<LoginDataInterface> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(loginSubmit)}>
      <InputContainer>
        <Input
          type='email'
          {...register('mail', { required: '이메일을 입력해주세요.' })}
          placeholder='이메일 주소를 입력해주세요.'
        />
        {errors.mail && <p>{errors.mail.message}</p>}

        <Input
          type='password'
          {...register('password', { required: '비밀번호를 입력해주세요.' })}
          placeholder='비밀번호를 입력해주세요.'
        />
        {errors.password && <p>{errors.password.message}</p>}
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
  gap: 2rem;
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
