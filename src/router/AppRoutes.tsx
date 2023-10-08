import React from 'react';
import { LINK } from '../constants/links';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignUpPage';
import SearchPage from '../pages/search/SearchPage';
import ChatPage from '../pages/chat/ChatPage';
import MainPage from '../pages/main/MainPage';
import FreePostListPage from '../pages/post/FreePostListPage';
import HelpPostListPage from '../pages/post/HelpPostListPage';

interface AppRoutesInterface {
  name: string;
  path: string;
  component: React.ComponentType;
  meta?: {
    hideNavBar?: boolean;
    hideFloatNav?: boolean;
  };
}

const routes: AppRoutesInterface[] = [
  {
    name: 'Spalsh',
    path: LINK.SPLASH,
    component: HomePage,
    meta: { hideNavBar: true, hideFloatNav: true },
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
    meta: { hideNavBar: true, hideFloatNav: true },
  },
  {
    name: 'SignUp',
    path: LINK.SIGNUP,
    component: SignUpPage,
    meta: { hideNavBar: true, hideFloatNav: true },
  },
  {
    name: 'FreePost',
    path: LINK.POST_FREE,
    component: FreePostListPage,
    meta: { hideNavBar: true },
  },
  {
    name: 'HelpPost',
    path: LINK.POST_HELP,
    component: HelpPostListPage,
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
    meta: { hideFloatNav: true },
  },
];

export default routes;
