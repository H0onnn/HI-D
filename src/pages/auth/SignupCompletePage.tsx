import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import CheckIcon from '../../public/images/input/check.svg';
import { ButtonContainer } from '../../styles/styles';
import Button from '../../components/public/Button';
import { LINK } from '../../constants/links';

const SignupCompletePage = () => {
  const navigate = useNavigate();

  return (
    <SignupCompletePageLayout>
      <CompleteImgWrapper>
        <CompleteImg src={CheckIcon} alt='complete' />
      </CompleteImgWrapper>
      <CompleteTextContainer>
        <span>회원가입 완료!</span>
        <p>로그인 후 모든 서비스를 이용해보세요</p>
      </CompleteTextContainer>
      <ButtonContainer>
        <Button $isFullWidth onClick={() => navigate(LINK.LOGIN)} type='button'>
          로그인
        </Button>
      </ButtonContainer>
    </SignupCompletePageLayout>
  );
};

export default SignupCompletePage;

const SignupCompletePageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CompleteImgWrapper = styled.div`
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 100%;
`;

const CompleteImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CompleteTextContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > span {
    font-size: 16px;
    font-weight: 400;
    color: ${colors.font};
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    color: ${colors.font};
  }
`;
