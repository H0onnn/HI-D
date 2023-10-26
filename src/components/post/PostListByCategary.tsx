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
        case 'help':
          return <HelpContainerByMain />;
        case 'free':
          return <FreeContainerByMain />;
        default:
          return;
      }
    case '/post':
      switch (category) {
        case 'help':
          return <HelpContainer />;
        case 'free':
          return <FreeContainer />;
        default:
          return;
      }
    case '/search':
      switch (category) {
        case 'help':
          return <HelpContainer keyword={keyword} />;
        case 'free':
          return <FreeContainer keyword={keyword} />;
        default:
          return;
      }
    default:
      return;
  }
};

export default PostListByCategary;
