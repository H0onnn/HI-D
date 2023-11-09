import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuthToken } from '@/store/authStore';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import { getUserData } from '@/services/user';
import { UserDataInterface } from '@/types/user';
import { LINK } from '@/constants/links';

export const QUERY_KEY = 'currentUser';

const useUser = () => {
  const queryClient: QueryClient = useQueryClient();
  const token = useAuthToken();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === LINK.MYPAGE) {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY, token] });
    }
  }, [location.pathname, queryClient, token]);

  const { data: user } = useQuery<UserDataInterface>({
    queryKey: [QUERY_KEY, token],
    queryFn: getUserData,
    enabled: !!token,
    staleTime: 1000 * 60 * 60, // 1시간
  });

  return { queryClient, user };
};

export default useUser;
