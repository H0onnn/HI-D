import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import { useNavigate } from 'react-router-dom';
import closeIcon from '../../public/images/elephant.png';
import openIcon from '../../public/images/elephant.png';

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
    <>
      {modal && (
        <>
          <BackDrop ref={modalBackground} onClick={closeModalHanlder} />
          <FloatingMenu>
            <FloatingItem onClick={() => navigate('')}>
              <MeneText id='float_help'>
                <h3>도움이 필요해요</h3>
                <p>전공고민 질문하기</p>
              </MeneText>
              <MenuIcon></MenuIcon>
            </FloatingItem>
            <FloatingItem onClick={() => navigate('')}>
              <MeneText id='float_free'>
                <h3>자유게시판</h3>
                <p>자유롭게 글쓰기</p>
              </MeneText>
              <MenuIcon></MenuIcon>
            </FloatingItem>
          </FloatingMenu>
        </>
      )}
      <ModalButton onClick={modalButtonHandler}>
        <img src={`${modal ? closeIcon : openIcon}`} alt={modal ? 'close_icon' : 'open_icon'} />
      </ModalButton>
    </>
  );
};

export default FloatingNav;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
`;
const ModalButton = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 9rem;
  right: 2rem;
  cursor: pointer;
  width: 5.2rem;
  height: 5.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  > img {
    width: 100%;
    height: 100%;
  }
`;
const FloatingMenu = styled.div`
  z-index: 100;
  position: absolute;
  bottom: 15.2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const FloatingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
  cursor: pointer;
`;

const MeneText = styled.div`
  color: #fff;
  text-align: right;
  font-family: SUIT;
  font-style: normal;
  line-height: 150%;
  > h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 14px;
    font-weight: 400;
  }
`;
const MenuIcon = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  > img {
    width: 100%;
    height: 100%;
  }
`;
