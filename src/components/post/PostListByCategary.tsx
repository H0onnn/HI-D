import React from 'react';
import { useLocation } from 'react-router-dom';
import HelpContainerByMain from '../main/HelpContainerByMain';
import FreeContainerByMain from '../main/FreeContainerByMain';

const PostListByCategary = (category: string) => {
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
          return <HelpContainerByMain />;
        case 'free':
          return <FreeContainerByMain />;
        default:
          return;
      }
    default:
      return;
  }
};

export default PostListByCategary;
