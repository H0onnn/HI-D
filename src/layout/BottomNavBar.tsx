import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavButton from './BottomNavButton';
import { LINK } from '../constants/links';
import HOME_ICON from '@/public/images/bottomNav/home.svg';
import CHAT_ICON from '@/public/images/bottomNav/chat.svg';
import SEARCH_ICON from '@/public/images/bottomNav/search.svg';
import MYPAGE_ICON from '@/public/images/bottomNav/mypage.svg';
import HOME_FILL from '@/public/images/bottomNav/home_fill.svg';
import CHAT_FILL from '@/public/images/bottomNav/chat_fill.svg';
import SEARCH_FILL from '@/public/images/bottomNav/search_fill.svg';
import MYPAGE_FILL from '@/public/images/bottomNav/mypage_fill.svg';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <BottomNavBarLayout>
      <BottomNavButton
        text='홈'
        src={location.pathname === LINK.MAIN ? HOME_FILL : HOME_ICON}
        alt='home'
        onClick={() => navigate(LINK.MAIN)}
        active={location.pathname === LINK.MAIN}
      />
      <BottomNavButton
        text='채팅'
        src={location.pathname === LINK.CHAT ? CHAT_FILL : CHAT_ICON}
        alt='chat'
        onClick={() => navigate(LINK.CHAT)}
        active={location.pathname === LINK.CHAT}
      />
      <BottomNavButton
        text='검색'
        src={location.pathname === LINK.SEARCH ? SEARCH_FILL : SEARCH_ICON}
        alt='search'
        onClick={() => navigate(LINK.SEARCH)}
        active={location.pathname === LINK.SEARCH}
      />
      <BottomNavButton
        text='마이'
        src={location.pathname === LINK.MYPAGE ? MYPAGE_FILL : MYPAGE_ICON}
        alt='mypage'
        onClick={() => navigate(LINK.MYPAGE)}
        active={location.pathname === LINK.MYPAGE}
      />
    </BottomNavBarLayout>
  );
};

export default BottomNavBar;

const BottomNavBarLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 39rem;
  height: 7.8rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
  z-index: 50;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`;
