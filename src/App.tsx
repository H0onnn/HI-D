import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout';
import AppRoutes from './router/routes';
import ToasterContext from './libs/ToasterContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <ToasterContext />
          <AppRoutes />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
