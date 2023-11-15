import React, { useEffect } from 'react';
import { useAuthToken } from './store/authStore';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './layout/Layout';
import AppRoutes from './router/routes';
import ToasterContext from './libs/ToasterContext';
import { webSocketInstance } from './services/websocketInstance';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const token = useAuthToken();

  useEffect(() => {
    if (!token) return;

    if (token) {
      webSocketInstance.setToken(token);
      webSocketInstance.connect();
    } else {
      webSocketInstance.disconnect();
    }
    return () => {
      webSocketInstance.disconnect();
    };
  }, [token]);

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
