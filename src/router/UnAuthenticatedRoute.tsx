import React from 'react';
import { LINK } from '@/constants/links';
import { Navigate } from 'react-router-dom';
import { useAuthToken } from '@/store/authStore';

interface UnAuthenticatedRouteInterface {
  children: React.ReactNode;
}

const UnAuthenticatedRoute = ({ children }: UnAuthenticatedRouteInterface) => {
  const isAuth = useAuthToken();

  return isAuth ? <Navigate to={LINK.MAIN} /> : children;
};

export default UnAuthenticatedRoute;
