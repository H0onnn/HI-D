import { AxiosInstance, AxiosError } from 'axios';
import useAuthStore from '../store/authStore';
import { httpClient } from './httpClient';

export const setupInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      if (error.response?.status === 998) {
        try {
          const response = await httpClient.auth.post.refreshToken();
          const newAccessToken = response.headers['authorization'];

          if (newAccessToken && error.config) {
            useAuthStore.getState().setToken(newAccessToken);

            error.config.headers['Authorization'] = newAccessToken;
            return instance(error.config);
          }
          return Promise.reject(error);
        } catch (refreshError) {
          useAuthStore.getState().logout();
          console.log('refresh token err : ', refreshError);
          return Promise.reject(error);
        }
      } else if (error.request) {
        console.log('요청 전송 오류 : 서버에 요청을 보낼 수 없습니다.', error.request);
      } else {
        console.log('요청 준비 오류 : 요청을 처리하는 도중 오류가 발생했습니다.', error.message);
      }
      return Promise.reject(error);
    },
  );

  instance.interceptors.request.use(
    (config) => {
      const token = useAuthStore.getState().token;
      if (token) {
        config.headers.Authorization = `${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
};
