import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout';
import AppRoutes from './router/routes';
import ToasterContext from './libs/ToasterContext';

const App = () => {
  return (
    <Router>
      <Layout>
        <ToasterContext />
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
