import useAuthStore, { useAuthActions } from '@/store/authStore';
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';
import { getToken, getUserData } from '@/services/user';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';
import { LoginDataInterface } from '@/types/types';
import { UserDataInterface } from '@/types/user';

const useLogin = () => {
  const { setToken } = useAuthActions();
  const { queryClient } = useUser();
  const navigate = useNavigate();
  const USER_QUERY_KEY = 'currentUser';

  const fetchToken = async (data: LoginDataInterface) => {
    try {
      const token = await getToken(data);
      setToken(token);
    } catch (err: unknown) {
      console.error('토큰 fetching 에러 : ', err);
      toast.error('회원 정보가 올바르지 않습니다.', { id: 'tokenFetchingError' });
    }
  };

  const loginHandler = async (data: LoginDataInterface) => {
    try {
      await fetchToken(data);
      const token = useAuthStore.getState().token;
      if (token) {
        const userData = queryClient.getQueryData<UserDataInterface>([USER_QUERY_KEY]);

        if (!userData) {
          await getUserData();
        }

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

  return { loginHandler, USER_QUERY_KEY };
};

export default useLogin;
