import React from 'react';
import styled from 'styled-components';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import CloseIcon from '@/public/images/floatingNav/close_icon.svg';
import OpenIcon from '@/public/images/floatingNav/open_icon.svg';
import { colors } from '@/constants/colors';
import useModalStore from '@/store/modalStore';
import { fadeIn } from '@/styles/styles';
import { ModalFloat } from '@/components/public/modal/GlobalModal';
import { MODAL_TYPES } from '@/types/modal';

const FloatingNav = () => {
  const { openScroll } = useBodyScrollLock();
  const { openModal, modalOpen, closeModal } = useModalStore();

  const openModalHandler = () => {
    openModal({ modalType: MODAL_TYPES.FLOAT });
  };
  const closeModalHandler = () => {
    closeModal();
    openScroll();
  };

  return (
    <ModalFloat>
      <FloatingMenu>
        <FloatingItem onClick={modalOpen ? closeModalHandler : openModalHandler}>
          <ModalIcon>
            <img
              src={modalOpen ? CloseIcon : OpenIcon}
              alt={modalOpen ? 'close_icon' : 'open_icon'}
            />
          </ModalIcon>
        </FloatingItem>
      </FloatingMenu>
    </ModalFloat>
  );
};

export default FloatingNav;

export const FloatingMenu = styled.div`
  position: absolute;
  bottom: 9rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FloatingItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const ModalIcon = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  > img {
    width: 40%;
    height: 40%;
    object-fit: cover;
  }
`;
