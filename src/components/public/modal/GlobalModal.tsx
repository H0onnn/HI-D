import React, { useEffect } from 'react';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import styled from 'styled-components';
import useModalStore from '@/store/modalStore';
import { MODAL_TYPES } from '@/types/modal';
import AlertModal from './AlertModal';
import FloatModal from './FloatModal';
import ChatModal from '@/components/chat/ChatModal';

const GlobalModal = () => {
  const { closeModal, modalOpen, modalType, modalProps } = useModalStore();
  const { openScroll, lockScroll } = useBodyScrollLock();

  const closeModalHandler = () => {
    closeModal();
    openScroll();
  };

  const renderComponent = () => {
    if (!modalType) {
      return null;
    }
    const ModalComponent = MODAL_COMPONENTS[modalType];

    const backDropStyle =
      modalType === MODAL_TYPES.SETTING ? { backgroundColor: 'transparent' } : {};

    return (
      <>
        {modalOpen && (
          <>
            <BackDrop onClick={closeModalHandler} style={backDropStyle} />
            <ModalFloat>
              <ModalComponent {...modalProps} />
            </ModalFloat>
          </>
        )}
      </>
    );
  };

  useEffect(() => {
    if (modalOpen) {
      lockScroll();
    }
    return () => {
      openScroll();
    };
  }, []);

  return <>{renderComponent()}</>;
};

export default GlobalModal;

const MODAL_COMPONENTS = {
  [MODAL_TYPES.ALERT]: AlertModal,
  [MODAL_TYPES.FLOAT]: FloatModal,
  [MODAL_TYPES.CHAT]: ChatModal,
};

export const BackDrop = styled.div`
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
