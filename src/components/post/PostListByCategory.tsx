import React from 'react';
import { useLocation } from 'react-router-dom';
import HelpContainerByMain from '../main/HelpContainerByMain';
import FreeContainerByMain from '../main/FreeContainerByMain';
import HelpContainer from './HelpContainer';
import FreeContainer from './FreeContainer';
import FreeContainerByMypage from './FreeContainerByMypage';
import HelpContainerByMypage from './HelpContainerByMypage';
import { LINK } from '@/constants/links';

const PostListByCategory = (category: string, keyword?: string) => {
  const location = useLocation();
  console.log(location.pathname);
  switch (true) {
    case location.pathname.startsWith(LINK.MAIN):
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainerByMain />;
        case 'FREE':
          return <FreeContainerByMain />;
        default:
          return;
      }
    case location.pathname.startsWith(LINK.POST):
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainer />;
        case 'FREE':
          return <FreeContainer />;
        default:
          return;
      }
    case location.pathname.startsWith(LINK.SEARCH):
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainer keyword={keyword} />;
        case 'FREE':
          return <FreeContainer keyword={keyword} />;
        default:
          return;
      }
    case location.pathname.startsWith(LINK.MYPAGE):
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainerByMypage />;
        case 'FREE':
          return <FreeContainerByMypage />;
        default:
          return;
      }
    default:
      return;
  }
};

export default PostListByCategory;
