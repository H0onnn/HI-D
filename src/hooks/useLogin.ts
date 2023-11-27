import useSetAuthToken from '@/store/authStore';
import useUser, { QUERY_KEY as userQueryKey } from './useUser';
import { useNavigate } from 'react-router-dom';
import { getToken, getUserData } from '@/services/user';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';
import { LoginDataInterface } from '@/types/types';
import { UserDataInterface } from '@/types/user';
import { AxiosError } from 'axios';

const useLogin = () => {
  const navigate = useNavigate();
  const { setToken } = useSetAuthToken();
  const { queryClient } = useUser();

  const fetchAndSetUserData = async () => {
    const userData = queryClient.getQueryData<UserDataInterface>([userQueryKey]);

    if (!userData) await getUserData();
  };

  const loginHandler = async (loginData: LoginDataInterface) => {
    try {
      const newToken = await getToken(loginData);
      setToken(newToken);

      await fetchAndSetUserData();

      navigate(LINK.MAIN);
      toast.success('로그인 되었습니다.', { id: 'loginSuccess' });
      return;
    } catch (err: unknown) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data.message, { id: 'loginError' });
      } else {
        toast.error('로그인 중 오류가 발생했습니다.', { id: 'unknownError' });
      }
    }
  };

  return { loginHandler };
};

export default useLogin;
