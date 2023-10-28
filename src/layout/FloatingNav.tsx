import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@/public/images/floatingNav/close_icon.svg';
import OpenIcon from '@/public/images/floatingNav/open_icon.svg';
import FreeIcon from '@/public/images/floatingNav/free_icon.svg';
import HelpIcon from '@/public/images/floatingNav/help_icon.svg';
import { colors } from '@/constants/colors';
import { LINK } from '@/constants/links';

const FloatingNav = () => {
  const { lockScroll, openScroll } = useBodyScrollLock();
  const [modal, setModal] = useState<boolean>(false);
  const modalBackground = useRef(null);
  const navigate = useNavigate();

  const closeModalHanlder = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalBackground.current) {
      setModal(false);
      openScroll();
    }
  };

  const modalButtonHandler = () => {
    if (modal) {
      setModal(false);
      openScroll();
    } else {
      setModal(true);
      lockScroll();
    }
  };

  return (
    <Layout>
      {modal && (
        <>
          <BackDrop ref={modalBackground} onClick={closeModalHanlder} />
          <FloatingMenu>
            <FloatingItem onClick={() => navigate(LINK.POSTING_HELP)}>
              <MeneText id='float_help'>
                <h3>도움이 필요해요</h3>
                <p>전공고민 질문하기</p>
              </MeneText>
              <MenuIcon>
                <img src={HelpIcon} alt={'help_icon'} />
              </MenuIcon>
            </FloatingItem>
            <FloatingItem onClick={() => navigate(LINK.POSTING_FREE)}>
              <MeneText id='float_free'>
                <h3>자유게시판</h3>
                <p>자유롭게 글쓰기</p>
              </MeneText>
              <MenuIcon>
                <img src={FreeIcon} alt={'free_icon'} />
              </MenuIcon>
            </FloatingItem>
            <FloatingItem>
              <ModalIcon onClick={modalButtonHandler}>
                <img src={CloseIcon} alt={'close_icon'} />
              </ModalIcon>
            </FloatingItem>
          </FloatingMenu>
        </>
      )}
      {!modal && (
        <FloatingMenu>
          <FloatingItem>
            <ModalIcon onClick={modalButtonHandler}>
              <img src={OpenIcon} alt={'open_icon'} />
            </ModalIcon>
          </FloatingItem>
        </FloatingMenu>
      )}
    </Layout>
  );
};

export default FloatingNav;

const Layout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 39rem;
  z-index: 99;
`;
const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
  overflow: hidden;
`;
const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }

`;
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
