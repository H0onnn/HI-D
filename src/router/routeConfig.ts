import React from 'react';
import { LINK } from '../constants/links';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/auth/LoginPage';
import SignUpPage from '../pages/auth/SignUpPage';
import SignupCompletePage from '../pages/auth/SignupCompletePage';
import SearchPage from '../pages/search/SearchPage';
import ChatPage from '../pages/chat/ChatPage';
import MainPage from '../pages/main/MainPage';
import FreePostListPage from '../pages/post/FreePostListPage';
import HelpPostListPage from '../pages/post/HelpPostListPage';
import PostingPage from '@/pages/posting/PostingPage';
import PostDetailPage from '@/pages/post/PostDetailPage';

interface AppRoutesInterface {
  name: string;
  path: string;
  component: React.ComponentType;
  isProtected?: boolean;
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
    name: 'SignUpComplete',
    path: LINK.SIGNUP_SUCCESS,
    component: SignupCompletePage,
    meta: { hideNavBar: true, hideFloatNav: true },
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
    isProtected: true,
    meta: { hideFloatNav: true },
  },
  {
    name: 'PostingHelp',
    path: LINK.POSTING_HELP,
    component: PostingPage,
    isProtected: true,
    meta: { hideNavBar: true, hideFloatNav: true },
  },
  {
    name: 'PostingFree',
    path: LINK.POSTING_FREE,
    component: PostingPage,
    isProtected: true,
    meta: { hideNavBar: true, hideFloatNav: true },
  },
  {
    name: 'PostDetail',
    path: LINK.POST_DETAIL,
    component: PostDetailPage,
    meta: { hideNavBar: true, hideFloatNav: true },
  },
];

export default routes;
