import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import BottomNavBar from './BottomNavBar';

interface LayoutInterface {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <PageLayout>
      <PageContentLayout>
        {children}
        <BottomNavBar />
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
  max-width: 390px;
  background: ${colors.white};
  margin: 0 auto;
  padding-bottom: 65px;
`;
