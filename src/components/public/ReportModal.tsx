import React, { useEffect } from 'react';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../constants/colors';
import Button from './Button';

interface NoMajorModalInterface {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReportModal = ({ setModalState }: NoMajorModalInterface) => {
  const { openScroll } = useBodyScrollLock();

  // 모달이 떠있을 때 스크롤 방지
  useEffect(() => {
    openScroll();
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
        <ModalComment>검색 결과가 없어요.</ModalComment>
        <Button $isFullWidth>신고하기</Button>
      </ModalContainer>
    </>
  );
};

export default ReportModal;

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
  justify-content: center;
  align-items: center;
  gap: 2rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 35rem;
  padding: 0 2rem;
  background-color: ${colors.white};
  border-radius: 20px 20px 0 0;
  border-top: 1px solid ${colors.gray1};
  z-index: 100;
`;

const ModalComment = styled.span`
  font-size: 16px;
  color: ${colors.gray5};
  padding-bottom: 4rem;
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
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
`;
