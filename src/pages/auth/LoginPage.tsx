import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Button from '../../components/public/Button';
import Input from '../../components/public/Input';
import MainComment from '../../components/auth/MainComment';

const LoginPage = () => {
  const navigate = useNavigate();

  const loginClickHandler = () => {
    console.log('로그인 버튼 클릭');
  };

  const findIdClickHandler = () => {};

  const findPasswordClickHandler = () => {};

  const signUpClickHandler = () => {
    navigate('/signup');
  };

  const serviceClickHandler = () => {
    navigate('/main');
  };

  return (
    <LoginPageLayout>
      <MainComment />
      <InputContainer>
        <Input placeholder='이메일 주소를 입력해 주세요.' />
        <Input placeholder='비밀번호를 입력해 주세요.' />
      </InputContainer>
      <ButtonContainer>
        <Button isFullWidth onClick={loginClickHandler}>
          로그인
        </Button>
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
          <Button
            variant='textOnly'
            size='small'
            style={{
              color: colors.font,
            }}
            onClick={serviceClickHandler}
          >
            서비스 둘러보기
          </Button>
          <ServiceButtonLine />
        </ServiceButtonBox>
      </ButtonContainer>
    </LoginPageLayout>
  );
};

export default LoginPage;

const LoginPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 7rem;
`;

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
  bottom: 7rem;
  left: 0;
  padding: 0 1rem;
`;

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
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ServiceButtonLine = styled.div`
  width: 85%;
  height: 0;
  border-bottom: 1px solid ${colors.lineGray};
`;
