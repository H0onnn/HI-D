import { AxiosInstance, AxiosError } from 'axios';
import useAuthStore from '../store/authStore';

export const setupInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response) {
        return Promise.reject(error);
      } else if (error.request) {
        console.log('요청 전송 오류: 서버에 요청을 보낼 수 없습니다.');
      } else {
        console.log('요청 준비 오류: 요청을 처리하는 도중 오류가 발생했습니다.');
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
