import { LINK } from '../constants/links';
import HOME_ICON from '@/public/images/bottomNav/home.svg';
import CHAT_ICON from '@/public/images/bottomNav/chat.svg';
import SEARCH_ICON from '@/public/images/bottomNav/search.svg';
import MYPAGE_ICON from '@/public/images/bottomNav/mypage.svg';
import HOME_FILL from '@/public/images/bottomNav/home_fill.svg';
import CHAT_FILL from '@/public/images/bottomNav/chat_fill.svg';
import SEARCH_FILL from '@/public/images/bottomNav/search_fill.svg';
import MYPAGE_FILL from '@/public/images/bottomNav/mypage_fill.svg';
import DECLARE_ICON from '@/public/images/bottomNav/admin/declare.svg';
import DECLARE_FILL from '@/public/images/bottomNav/admin/declare_fill.svg';
import ACCOUNT_ICON from '@/public/images/bottomNav/admin/account.svg';
import ACCOUNT_FILL from '@/public/images/bottomNav/admin/account_fill.svg';
import LOGOUT_ICON from '@/public/images/bottomNav/admin/logout.svg';
import { MODAL_TYPES } from '@/types/modal';

export const NAV_ITEMS = [
  {
    text: '홈',
    defaultIcon: HOME_ICON,
    activeIcon: HOME_FILL,
    link: LINK.MAIN,
    alt: 'home',
  },
  {
    text: '채팅',
    defaultIcon: CHAT_ICON,
    activeIcon: CHAT_FILL,
    link: LINK.CHAT,
    alt: 'chat',
  },
  {
    text: '검색',
    defaultIcon: SEARCH_ICON,
    activeIcon: SEARCH_FILL,
    link: LINK.SEARCH,
    alt: 'search',
  },
  {
    text: '마이',
    defaultIcon: MYPAGE_ICON,
    activeIcon: MYPAGE_FILL,
    link: LINK.MYPAGE,
    alt: 'mypage',
  },
] as const;

export const NAV_ITEMS_ADMIN = [
  {
    text: '홈',
    defaultIcon: HOME_ICON,
    activeIcon: HOME_FILL,
    link: LINK.MAIN,
    alt: 'home',
  },
  {
    text: '신고관리',
    defaultIcon: DECLARE_ICON,
    activeIcon: DECLARE_FILL,
    link: LINK.ADMIN_DECLARE,
    alt: 'declare',
  },
  {
    text: '계정관리',
    defaultIcon: ACCOUNT_ICON,
    activeIcon: ACCOUNT_FILL,
    link: LINK.ADMIN_ACCOUNT,
    alt: 'account',
  },
  {
    text: '로그아웃',
    defaultIcon: LOGOUT_ICON,
    activeIcon: LOGOUT_ICON,
    link: MODAL_TYPES.ALERT,
    alt: 'logout',
  },
] as const;
