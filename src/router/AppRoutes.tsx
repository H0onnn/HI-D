import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/auth/LoginPage';

interface AppRoutesInterface {
  name: string;
  path: string;
  component: React.ComponentType;
  meta?: {
    hideNavBar?: boolean;
  };
}

const routes: AppRoutesInterface[] = [
  {
    name: 'Home',
    path: '/',
    component: HomePage,
    meta: { hideNavBar: true },
  },
  {
    name: 'Login',
    path: '/login',
    component: LoginPage,
    meta: { hideNavBar: true },
  },
];

export default routes;
