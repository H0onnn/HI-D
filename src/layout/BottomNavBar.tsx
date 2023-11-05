import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import BottomNavButton from './BottomNavButton';
import { NAV_ITEMS, NAV_ITEMS_ADMIN } from '@/constants/bottomNavItem';
import useModalStore from '@/store/modalStore';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { MODAL_TYPES } from '@/types/modal';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname.includes('/admin'); // todo: check if user is admin
  const navItems = isAdmin ? NAV_ITEMS_ADMIN : NAV_ITEMS;
  const { lockScroll } = useBodyScrollLock();
  const { openModal, closeModal } = useModalStore();

  const logoutHandler = () => {
    closeModal();
  };

  const logoutModalHandler = () => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: '로그아웃 하시겠습니까?',
        confirmText: '로그아웃',
        onConfirmHandler: logoutHandler,
      },
    });
    lockScroll();
  };

  return (
    <BottomNavBarLayout>
      {navItems.map((item) => (
        <BottomNavButton
          key={item.link}
          text={item.text}
          src={location.pathname === item.link ? item.activeIcon : item.defaultIcon}
          alt={item.alt}
          onClick={() => {
            if (item.link === MODAL_TYPES.ALERT) {
              logoutModalHandler();
            } else {
              navigate(item.link);
            }
          }}
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
