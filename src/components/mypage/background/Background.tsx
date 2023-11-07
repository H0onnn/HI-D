import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import SPLASH_IMG from '@/public/images/splash.svg';

const Background = () => {
  return (
    <Layout>
      <ImageWrapper>
        <BackgroundImage src={SPLASH_IMG} alt='mypage_splash' />
      </ImageWrapper>
    </Layout>
  );
};

export default Background;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  max-height: 44.5rem;
  background-color: ${colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const ImageWrapper = styled.div`
  width: 35rem;
  height: 31rem;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
