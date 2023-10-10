import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { LogoBox } from '../styles/styles';
import Button from '../components/public/Button';
import GoServiceButton from '@/components/public/GoServiceButton';
import { ButtonContainer } from '../styles/styles';
import { PageLayout } from '../styles/styles';
import { LINK } from '../constants/links';
import SPLASH_IMAGE from '@/public/images/splash.svg';
import Logo from '@/components/public/UI/Logo';

const HomePage = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate(LINK.LOGIN);
  };

  return (
    <PageLayout>
      <AnimatedLogoBox>
        <Logo />
      </AnimatedLogoBox>
      <AnimatedSplashImageBox>
        <SplashImage src={SPLASH_IMAGE} alt='splash_image' />
      </AnimatedSplashImageBox>
      <AnimatedButtonContainer>
        <Button $isFullWidth onClick={loginClickHandler}>
          로그인
        </Button>
        <GoServiceButton />
      </AnimatedButtonContainer>
    </PageLayout>
  );
};

export default HomePage;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SplashImageBox = styled.div`
  width: 30rem;
  height: 26rem;
  margin: 0 auto;
  margin-top: 4rem;
  overflow: hidden;
`;

const SplashImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AnimatedLogoBox = styled(LogoBox)`
  animation: ${fadeInUp} 2s forwards;
`;

const AnimatedSplashImageBox = styled(SplashImageBox)`
  animation: ${fadeInUp} 2s forwards;
`;

const AnimatedButtonContainer = styled(ButtonContainer)`
  animation: ${fadeInUp} 2s forwards;
`;
