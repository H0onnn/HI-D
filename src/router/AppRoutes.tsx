import React from 'react';
import HomePage from '../pages/HomePage';

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
    name: 'Home',
    path: '/',
    component: HomePage,
    meta: { hideNavBar: true },
  },
];

export default routes;
