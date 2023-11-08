import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '@/store/authStore';
import useModalStore from '@/store/modalStore';
import { postLogout } from '@/services/user';
import styled from 'styled-components';
import { ButtonContainer } from '@/styles/styles';
import Button from '@/components/public/Button';
import PageHeader from '@/components/public/PageHeader';
import Background from '@/components/mypage/background/Background';
import Contents from '@/components/mypage/contents/Contents';
import DeleteAccountBtn from '@/components/mypage/actions/DeleteAccountBtn';
import { MODAL_TYPES } from '@/types/modal';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';

const MyPage = () => {
  const logout = useLogout();
  const { openModal, closeModal } = useModalStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await postLogout();
      logout();
      closeModal();
      navigate(LINK.LOGIN);
      toast.success('로그아웃 되었습니다.', { id: 'logoutSuccess' });
    } catch (err: unknown) {
      console.error('로그아웃 에러 : ', err);
      toast.error('로그아웃에 실패했어요.', { id: 'logoutFail' });
    }
  };

  const logoutModalHandler = () => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: '정말 로그아웃 하시겠어요?',
        content: '로그아웃시 로그인 페이지로 이동합니다.',
        confirmText: '로그아웃',
        onConfirmHandler: handleLogout,
      },
    });
  };

  return (
    <>
      <PageHeader title='마이페이지' />
      <MyPageLayout>
        <Background />
        <Contents />
        <StyledButtonContainer>
          <Button $isFullWidth onClick={logoutModalHandler}>
            로그아웃
          </Button>
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
