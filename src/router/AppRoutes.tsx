import React from 'react';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignUpPage';
import SearchPage from '../pages/search/SearchPage';
import ChatPage from '../pages/chat/ChatPage';
import { LINK } from '../constants/links';
import MainPage from '../pages/main/MainPage';

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
    path: LINK.SPLASH,
    component: HomePage,
    meta: { hideNavBar: true },
  },
  {
    name: 'Main',
    path: LINK.MAIN,
    component: MainPage,
  },
  {
    name: 'Login',
    path: LINK.LOGIN,
    component: LoginPage,
    meta: { hideNavBar: true },
  },
  {
    name: 'SignUp',
    path: LINK.SIGNUP,
    component: SignUpPage,
    meta: { hideNavBar: true },
  },
  {
    name: 'Search',
    path: LINK.SEARCH,
    component: SearchPage,
  },
  {
    name: 'Chat',
    path: LINK.CHAT,
    component: ChatPage,
  },
];

export default routes;
