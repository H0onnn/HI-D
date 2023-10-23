import { LINK } from '../constants/links';
import HOME_ICON from '@/public/images/bottomNav/home.svg';
import CHAT_ICON from '@/public/images/bottomNav/chat.svg';
import SEARCH_ICON from '@/public/images/bottomNav/search.svg';
import MYPAGE_ICON from '@/public/images/bottomNav/mypage.svg';
import HOME_FILL from '@/public/images/bottomNav/home_fill.svg';
import CHAT_FILL from '@/public/images/bottomNav/chat_fill.svg';
import SEARCH_FILL from '@/public/images/bottomNav/search_fill.svg';
import MYPAGE_FILL from '@/public/images/bottomNav/mypage_fill.svg';

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
