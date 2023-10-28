import React from 'react';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import styled, { css } from 'styled-components';
import useModalStore from '@/store/modalStore';
import ModalLayout from './ModalLayout';
import { Footer } from '@/styles/post';
import { colors } from '@/constants/colors';

const AlertModal = () => {
  const {
    info: { title, content, onConfirm, confirmText = '확인' },
    changeModalStatus,
  } = useModalStore();
  const { openScroll } = useBodyScrollLock();

  const closeModalHandler = () => {
    changeModalStatus({ isOpen: false });
    openScroll();
  };

  return (
    <ModalLayout>
      <Container>
        <Title>{title}</Title>
        <Content>{content}</Content>
        <Footer>
          <CancleButton onClick={closeModalHandler}>취소</CancleButton>
          <ConfirmButton onClick={onConfirm}>{confirmText}</ConfirmButton>
        </Footer>
      </Container>
    </ModalLayout>
  );
};

export default AlertModal;

const Container = styled.div`
  width: 100%;
  height: 20rem;
  margin: 1.6rem auto;
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem 2.4rem 2rem;
  background-color: ${colors.white};
  border-radius: 1.2rem;
`;

const Title = styled.h1`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 700;
`;

const Content = styled.p`
  height: 100%;
  color: ${colors.gray3};
  font-size: 14px;
`;

const ButtonStyle = css`
  width: 15rem;
  height: 4.8rem;
  border-radius: 0.8rem;
  font-size: 16px;
  font-weight: 700;
`;
const CancleButton = styled.button`
  ${ButtonStyle};
  background-color: ${colors.gray1};
  color: ${colors.gray5};
`;
const ConfirmButton = styled.button`
  ${ButtonStyle};
  background-color: ${colors.primary};
  color: ${colors.white};
`;
