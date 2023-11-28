import React from 'react';
import useUser from '@/hooks/useUser';
import useMyPageActions from '@/hooks/useMyPageActions';
import styled from 'styled-components';
import { ButtonContainer } from '@/styles/styles';
import Button from '@/components/public/Button';
import PageHeader from '@/components/public/PageHeader';
import Background from '@/components/mypage/background/Background';
import Contents from '@/components/mypage/contents/Contents';
import DeleteAccountBtn from '@/components/mypage/actions/deleteAccount/DeleteAccountBtn';

const MyPage = () => {
  const { logoutModalHandler } = useMyPageActions();
  const { user } = useUser();

  return (
    <>
      <PageHeader title='마이페이지' isGoBack />
      <MyPageLayout>
        <Background user={user} />
        <Contents user={user} />
        <ButtonContainer $isRelative>
          <Button $isFullWidth onClick={logoutModalHandler}>
            로그아웃
          </Button>
          <DeleteAccountBtn />
        </ButtonContainer>
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
