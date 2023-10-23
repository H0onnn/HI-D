import React from 'react';
import { LINK } from '@/constants/links';
import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '@/store/authStore';

const ProtectedRoute = () => {
  const isAuth = useAuthStore((state) => state.token);

  return isAuth ? <Outlet /> : <Navigate to={LINK.LOGIN} replace />;
};

export default ProtectedRoute;
