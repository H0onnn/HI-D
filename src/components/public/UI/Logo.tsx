import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import MAIN_LOGO from '@/public/images/main_logo.svg';

const Logo = () => {
  return (
    <>
      <LogoImageBox>
        <LogoImage src={MAIN_LOGO} alt='main_logo' />
      </LogoImageBox>
      <TextWrapper>
        <Title>전공 고민은 하이디에서</Title>
      </TextWrapper>
    </>
  );
};

export default Logo;

const LogoImageBox = styled.div`
  width: 12rem;
  height: 100%;
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled.div`
  text-align: center;
  color: ${colors.font};
`;

const Title = styled.p`
  font-size: 14px;
  color: #a3a3a3;
  line-height: 21px;
`;
