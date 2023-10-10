import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LogoBox } from '../../styles/styles';
import { colors } from '../../constants/colors';
import Button from '../../components/public/Button';
import Logo from '@/components/public/UI/Logo';
import LoginForm from '../../components/auth/login/LoginForm';
import { PageLayout } from '../../styles/styles';
import GoServiceButton from '@/components/public/GoServiceButton';

const LoginPage = () => {
  const navigate = useNavigate();

  const findIdClickHandler = () => {};

  const findPasswordClickHandler = () => {};

  const signUpClickHandler = () => {
    navigate('/signup');
  };

  return (
    <PageLayout>
      <LogoBox style={{ marginBottom: '4rem' }}>
        <Logo />
      </LogoBox>
      <LoginForm />
      <AuthButtonContainer>
        <Button
          variant='textOnly'
          size='small'
          style={{ color: colors.font }}
          onClick={findIdClickHandler}
        >
          아이디 찾기
        </Button>
        <ButtonContainerLine />
        <Button
          variant='textOnly'
          size='small'
          style={{ color: colors.font }}
          onClick={findPasswordClickHandler}
        >
          비밀번호 찾기
        </Button>
        <ButtonContainerLine />
        <Button
          variant='textOnly'
          size='small'
          style={{ color: colors.font }}
          onClick={signUpClickHandler}
        >
          회원가입
        </Button>
      </AuthButtonContainer>
      <ServiceButtonBox>
        <GoServiceButton />
      </ServiceButtonBox>
    </PageLayout>
  );
};

export default LoginPage;

const AuthButtonContainer = styled.div`
  width: 29rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  margin: 0 auto;
`;

const ButtonContainerLine = styled.div`
  width: 0;
  height: 2rem;
  border-right: 1px solid ${colors.lineGray};
`;

const ServiceButtonBox = styled.div`
  width: 100%;
  position: absolute;
  bottom: 7rem;
  left: 0;
`;
