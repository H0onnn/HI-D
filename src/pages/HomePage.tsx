import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import Button from '../components/public/Button';
import MainPageImage from '../public/images/elephant.png';
import MainComment from '../components/auth/MainComment';
import { ButtonContainer } from '../styles/styles';
import { PageLayout } from '../styles/styles';

const HomePage = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    navigate('/login');
  };

  const serviceClickHandler = () => {
    navigate('/main');
  };

  return (
    <PageLayout>
      <MainComment comment='전공 고민이 많은 당신께,' />
      <MainComment comment='대학생 매칭 서비스' />
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
      </ButtonContainer>
    </PageLayout>
  );
};

export default HomePage;

const ImageBox = styled.div`
  width: 24rem;
  height: 24rem;
  overflow: hidden;
  margin: 0 auto;
`;
