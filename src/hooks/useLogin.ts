import useAuthStore from '@/store/authStore';
import { useNavigate } from 'react-router-dom';
import { httpClient } from '@/api/httpClient';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';
import { LoginDataInterface } from '@/types/types';

const useLogin = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const fetchToken = async (data: LoginDataInterface) => {
    try {
      const response = await httpClient.members.post.login(data);
      const jwt = response.headers['authorization'];
      setToken(jwt);
    } catch (err: unknown) {
      console.error('토큰 fetching 에러 : ', err);
    }
  };

  const loginHandler = async (data: LoginDataInterface) => {
    try {
      await fetchToken(data);
      const token = useAuthStore.getState().token;

      if (token) {
        navigate(LINK.MAIN);
        toast.success('로그인 되었습니다.', { id: 'loginSuccess' });
        return;
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message, { id: 'loginError' });
      } else {
        toast.error('로그인 중 오류가 발생했습니다.', { id: 'unknownError' });
      }
    }
  };

  return { loginHandler };
};

export default useLogin;
