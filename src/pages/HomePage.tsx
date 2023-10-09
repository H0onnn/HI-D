import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { colors } from '../constants/colors';
import Button from '../components/public/Button';
import MainComment from '../components/auth/MainComment';
import { ButtonContainer } from '../styles/styles';
import { PageLayout } from '../styles/styles';
import { LINK } from '../constants/links';

const HomePage = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate(LINK.LOGIN);
  };

  const serviceClickHandler = () => {
    navigate(LINK.MAIN);
  };

  return (
    <PageLayout>
      <AnimatedComment comment='전공 고민이 많은 당신께,' />
      <AnimatedComment comment='대학생 매칭 서비스' />
      <AnimatedImageBox>
        <CircleDiv>
          <TextWrapper>
            <Title>LOGO</Title>
            <SubTitle>대학교 과 정보공유 플랫폼</SubTitle>
          </TextWrapper>
        </CircleDiv>
      </AnimatedImageBox>
      <AnimatedButtonContainer>
        <Button $isFullWidth onClick={loginClickHandler}>
          로그인
        </Button>
        <Button
          $isFullWidth
          variant='textOnly'
          style={{
            color: colors.gray,
          }}
          onClick={serviceClickHandler}
        >
          서비스 둘러보기
        </Button>
      </AnimatedButtonContainer>
    </PageLayout>
  );
};

export default HomePage;

const ImageBox = styled.div`
  width: 24rem;
  height: 24rem;
  margin: 0 auto;
`;

const CircleDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 15%;
  border: 2px solid ${colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

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

const AnimatedComment = styled(MainComment)`
  animation: ${fadeInUp} 2s forwards;
`;

const AnimatedImageBox = styled(ImageBox)`
  animation: ${fadeInUp} 2s forwards;
`;

const AnimatedButtonContainer = styled(ButtonContainer)`
  animation: ${fadeInUp} 2s forwards;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${colors.font};
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  font-weight: normal;
`;
