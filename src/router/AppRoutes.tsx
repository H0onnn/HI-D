import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignUpPage';

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
    name: 'Spalsh',
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
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUpPage,
    meta: { hideNavBar: true },
  },
];

export default routes;
