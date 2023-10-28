import React from 'react';
import { useLocation } from 'react-router-dom';
import HelpContainerByMain from '../main/HelpContainerByMain';
import FreeContainerByMain from '../main/FreeContainerByMain';
import HelpContainer from './HelpContainer';
import FreeContainer from './FreeContainer';

const PostListByCategary = (category: string, keyword?: string) => {
  const location = useLocation();
  switch (location.pathname) {
    case '/main':
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainerByMain />;
        case 'FREE':
          return <FreeContainerByMain />;
        default:
          return;
      }
    case '/post':
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainer />;
        case 'FREE':
          return <FreeContainer />;
        default:
          return;
      }
    case '/search':
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainer keyword={keyword} />;
        case 'FREE':
          return <FreeContainer keyword={keyword} />;
        default:
          return;
      }
    case '/mypage':
      switch (category) {
        case 'NEED_HELP':
          return <HelpContainer />;
        case 'FREE':
          return <FreeContainer />;
        default:
          return;
      }
    default:
      return;
  }
};

export default PostListByCategary;
