import React, { useEffect } from 'react';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import styled, { keyframes } from 'styled-components';
import { colors } from '@/constants/colors';

interface SlideUpModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  subContent?: React.ReactNode;
}

const SlideUpModal = ({ setModalState, children }: SlideUpModalInterface) => {
  const { lockScroll } = useBodyScrollLock();

  // 모달이 떠있을 때 스크롤 방지
  useEffect(() => {
    lockScroll();
  }, []);

  const closeModalHanlder = () => setModalState(false);

  return (
    <>
      <BackDrop onClick={closeModalHanlder} />
      <ModalContainer>
        <CloseButtonWrapper>
          <CloseButton onClick={closeModalHanlder}>
            <svg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z'
                fill='#A1A1A1'
              />
            </svg>
          </CloseButton>
        </CloseButtonWrapper>
        {children}
      </ModalContainer>
    </>
  );
};

export default SlideUpModal;

const slideUp = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
`;

const ModalContainer = styled.div`
  animation: ${slideUp} 0.5s ease-in-out;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  @media (min-height: 880px) {
    height: 70%;
  }

  padding: 2rem 2rem;
  background-color: ${colors.white};
  border-radius: 20px 20px 0 0;
  border-top: 1px solid ${colors.gray1};
  overflow-y: scroll;
  z-index: 100;

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 101;
  padding: 0.5rem;
`;

const CloseButton = styled.button`
  position: fixed;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
`;
