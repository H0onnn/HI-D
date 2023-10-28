import React from 'react';
import styled from 'styled-components';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@/public/images/floatingNav/close_icon.svg';
import OpenIcon from '@/public/images/floatingNav/open_icon.svg';
import FreeIcon from '@/public/images/floatingNav/free_icon.svg';
import HelpIcon from '@/public/images/floatingNav/help_icon.svg';
import { colors } from '@/constants/colors';
import { LINK } from '@/constants/links';
import ModalLayout, { ModalFloat } from '@/components/public/ModalLayout';
import useModalStore from '@/store/modalStore';
import { fadeIn } from '@/styles/styles';

const FloatingNav = () => {
  const { lockScroll, openScroll } = useBodyScrollLock();
  const { changeModalStatus, isOpen } = useModalStore();
  const navigate = useNavigate();

  const openModalHanlder = () => {
    changeModalStatus({ isOpen: true, info: { type: 'page' } });
    lockScroll();
  };
  const closeModalHandler = () => {
    changeModalStatus({ isOpen: false });
    openScroll();
  };

  return (
    <>
      {isOpen && (
        <ModalLayout>
          <FloatingMenu>
            <FloatingItem onClick={() => navigate(LINK.POSTING_HELP)}>
              <MeneText>
                <h3>도움이 필요해요</h3>
                <p>전공고민 질문하기</p>
              </MeneText>
              <MenuIcon>
                <img src={HelpIcon} alt={'help_icon'} />
              </MenuIcon>
            </FloatingItem>
            <FloatingItem onClick={() => navigate(LINK.POSTING_FREE)}>
              <MeneText>
                <h3>자유게시판</h3>
                <p>자유롭게 글쓰기</p>
              </MeneText>
              <MenuIcon>
                <img src={FreeIcon} alt={'free_icon'} />
              </MenuIcon>
            </FloatingItem>
            <FloatingItem>
              <ModalIcon onClick={closeModalHandler}>
                <img src={CloseIcon} alt={'close_icon'} />
              </ModalIcon>
            </FloatingItem>
          </FloatingMenu>
        </ModalLayout>
      )}
      {!isOpen && (
        <ModalFloat>
          <FloatingMenu>
            <FloatingItem>
              <ModalIcon onClick={openModalHanlder}>
                <img src={OpenIcon} alt={'open_icon'} />
              </ModalIcon>
            </FloatingItem>
          </FloatingMenu>
        </ModalFloat>
      )}
    </>
  );
};

export default FloatingNav;

const FloatingMenu = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 9rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FloatingItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const MeneText = styled.div`
  color: ${colors.white};
  text-align: right;
  > h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 14px;
  }
`;
const MenuIcon = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 0;
  > img {
    padding-top: 0.8rem;
    width: 180%;
    height: 180%;
    object-fit: cover;
  }
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
