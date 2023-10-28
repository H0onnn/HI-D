import React from 'react';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import styled from 'styled-components';
import useModalStore from '@/store/modalStore';

interface Props {
  children: React.ReactNode;
}
const ModalLayout = ({ children }: Props) => {
  const { changeModalStatus, isOpen, info } = useModalStore();
  const { openScroll } = useBodyScrollLock();

  const closeModalHandler = () => {
    changeModalStatus({ isOpen: false });
    openScroll();
  };
  const backDropStyle =
    info?.type && info.type === 'setting' ? { backgroundColor: 'transparent' } : {};

  return (
    <>
      {isOpen && (
        <BackDrop onClick={closeModalHandler} style={backDropStyle}>
          <ModalFloat>{children}</ModalFloat>
        </BackDrop>
      )}
    </>
  );
};

export default ModalLayout;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;
export const ModalFloat = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 39rem;
  z-index: 100;
`;
