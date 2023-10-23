import React from 'react';
import { LINK } from '@/constants/links';
import { Navigate } from 'react-router-dom';
import useAuthStore from '@/store/authStore';

interface UnAuthenticatedRouteInterface {
  children: React.ReactNode;
}

const UnAuthenticatedRoute = ({ children }: UnAuthenticatedRouteInterface) => {
  const isAuth = useAuthStore((state) => state.token);

  return isAuth ? <Navigate to={LINK.MAIN} /> : children;
};

export default UnAuthenticatedRoute;
