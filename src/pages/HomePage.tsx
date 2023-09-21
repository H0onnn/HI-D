import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import Button from '../components/public/Button';
import MainPageImage from '../public/images/elephant.png';

const HomePage = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate('/login');
  };

  const serviceClickHandler = () => {
    navigate('/main');
  };

  return (
    <MainPageLayout>
      <MainPageTextContainer>
        <MainPageText>
          전공 고민이 많은 당신께,
          <br />
          대학생 매칭 서비스
        </MainPageText>
      </MainPageTextContainer>
      <ImageBox>
        <img
          src={MainPageImage}
          alt='main page image'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </ImageBox>
      <ButtonContainer>
        <Button isFullWidth onClick={loginClickHandler}>
          로그인
        </Button>
        <Button
          isFullWidth
          variant='textOnly'
          style={{
            color: colors.gray,
          }}
          onClick={serviceClickHandler}
        >
          서비스 둘러보기
        </Button>
      </ButtonContainer>
    </MainPageLayout>
  );
};

export default HomePage;

const MainPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const MainPageTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPageText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ImageBox = styled.div`
  width: 24rem;
  height: 24rem;
  overflow: hidden;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  bottom: 7rem;
  left: 0;
  padding: 0 1rem;
`;
