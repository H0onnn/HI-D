import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavButton from './BottomNavButton';

const BottomNavBar = () => {
  const navigate = useNavigate();

  return (
    <BottomNavBarLayout>
      <BottomNavButton text='홈' onClick={() => navigate('/')} />
      <BottomNavButton text='채팅' onClick={() => navigate('/')} />
      <BottomNavButton text='검색' onClick={() => navigate('/')} />
      <BottomNavButton text='마이페이지' onClick={() => navigate('/')} />
    </BottomNavBarLayout>
  );
};

export default BottomNavBar;

const BottomNavBarLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 390px;
  height: 65px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10px;
  z-index: 50;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
