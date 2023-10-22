import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '@/store/authStore';
import { LINK } from '@/constants/links';

const ProtectedRoute = () => {
  const isAuth = useAuthStore((state) => state.token);

  return isAuth ? <Outlet /> : <Navigate to={LINK.LOGIN} replace />;
};

export default ProtectedRoute;
