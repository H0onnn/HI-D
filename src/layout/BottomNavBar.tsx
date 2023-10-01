import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavButton from './BottomNavButton';
import { LINK } from '../constants/links';

const BottomNavBar = () => {
  const navigate = useNavigate();

  return (
    <BottomNavBarLayout>
      <BottomNavButton text='홈' onClick={() => navigate(LINK.MAIN)} />
      <BottomNavButton text='채팅' onClick={() => navigate(LINK.CHAT)} />
      <BottomNavButton text='검색' onClick={() => navigate(LINK.SEARCH)} />
      <BottomNavButton text='마이페이지' onClick={() => navigate(LINK.MYPAGE)} />
    </BottomNavBarLayout>
  );
};

export default BottomNavBar;

const BottomNavBarLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 39rem;
  height: 6.5rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  z-index: 50;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
