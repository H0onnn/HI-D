import React from 'react';
import { useLocation } from 'react-router-dom';
import routes from '../router/AppRoutes';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import BottomNavBar from './BottomNavBar';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  const location = useLocation();
  const currentRoute = routes.find((route) => route.path === location.pathname);
  const hideBottomNav = currentRoute?.meta?.hideNavBar || false;

  return (
    <PageLayout>
      <PageContentLayout>
        {children}
        {!hideBottomNav && <BottomNavBar />}
      </PageContentLayout>
    </PageLayout>
  );
};

export default Layout;

const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${colors.gray};
`;

const PageContentLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 39rem;
  background: ${colors.white};
  margin: 0 auto;
  padding: 2rem;
  padding-bottom: 6.5rem;
`;
