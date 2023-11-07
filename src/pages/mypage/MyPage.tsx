import React from 'react';
import styled from 'styled-components';
import { ButtonContainer } from '@/styles/styles';
import Button from '@/components/public/Button';
import PageHeader from '@/components/public/PageHeader';
import Background from '@/components/mypage/background/Background';
import Contents from '@/components/mypage/contents/Contents';
import DeleteAccountBtn from '@/components/mypage/actions/DeleteAccountBtn';

const MyPage = () => {
  return (
    <>
      <PageHeader title='마이페이지' />
      <MyPageLayout>
        <Background />
        <Contents />
        <StyledButtonContainer>
          <Button $isFullWidth>로그아웃</Button>
          <DeleteAccountBtn />
        </StyledButtonContainer>
      </MyPageLayout>
    </>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const StyledButtonContainer = styled(ButtonContainer)`
  @media (max-width: 768px) {
    bottom: 3rem;
  }
`;
