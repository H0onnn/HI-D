import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignUpPage';
import SearchPage from '../pages/search/SearchPage';
import ChatPage from '../pages/chat/ChatPage';

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
    name: 'Search',
    path: '/search',
    component: SearchPage,
  },
  {
    name: 'Chat',
    path: '/chat',
    component: ChatPage,
  },
];

export default routes;
