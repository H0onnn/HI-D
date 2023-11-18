import React from 'react';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import styled, { css } from 'styled-components';
import useModalStore from '@/store/modalStore';
import { colors } from '@/constants/colors';
import { IModalProps } from '@/types/modal';

const AlertModal = ({ title, content, onConfirmHandler, confirmText = '확인' }: IModalProps) => {
  const { closeModal } = useModalStore();
  const { openScroll } = useBodyScrollLock();

  const closeModalHandler = () => {
    closeModal();
    openScroll();
  };

  return (
    <Layout>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <CancelButton onClick={closeModalHandler}>취소</CancelButton>
        <ConfirmButton onClick={onConfirmHandler}>{confirmText}</ConfirmButton>
      </Footer>
    </Layout>
  );
};

export default AlertModal;

const Layout = styled.div`
  position: absolute;
  bottom: 50vh;
  left: 50%;
  transform: translate(-50%);
  width: 90%;
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  color: ${colors.gray5};
  font-size: 14px;
  margin: 0.4rem 0;
`;

const ButtonStyle = css`
  width: 15rem;
  height: 4.8rem;
  border-radius: 0.8rem;
  font-size: 16px;
  font-weight: 700;
  border: none;
`;
const CancelButton = styled.button`
  ${ButtonStyle};
  background-color: ${colors.gray1};
  color: ${colors.gray5};
`;
const ConfirmButton = styled.button`
  ${ButtonStyle};
  background-color: ${colors.primary};
  color: ${colors.white};
`;
export const Footer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
`;
