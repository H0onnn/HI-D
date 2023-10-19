import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './AppRoutes';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        if (route.isProtected) {
          return (
            <Route key={index} path={route.path} element={<ProtectedRoute />}>
              <Route index element={<route.component />} />
            </Route>
          );
        }
        return <Route key={index} path={route.path} element={<route.component />} />;
      })}
    </Routes>
  );
};

export default AppRoutes;
