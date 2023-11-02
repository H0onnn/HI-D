import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavButton from './BottomNavButton';
import { NAV_ITEMS, NAV_ITEMS_ADMIN } from '@/constants/bottomNavItem';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin'); // todo: check if user is admin
  const navItems = isAdmin ? NAV_ITEMS_ADMIN : NAV_ITEMS;

  return (
    <BottomNavBarLayout>
      {navItems.map((item) => (
        <BottomNavButton
          key={item.link}
          text={item.text}
          src={location.pathname === item.link ? item.activeIcon : item.defaultIcon}
          alt={item.alt}
          onClick={() => navigate(item.link)}
          $active={location.pathname === item.link}
        />
      ))}
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
