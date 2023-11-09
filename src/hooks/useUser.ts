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

  const { data: user, refetch } = useQuery<UserDataInterface>({
    queryKey: [QUERY_KEY],
    queryFn: getUserData,
    enabled: !!token,
    staleTime: 1000 * 60 * 60, // 1시간
  });

  useEffect(() => {
    if (location.pathname === LINK.MYPAGE) {
      refetch();
    }
  }, [location.pathname, refetch]);

  return { queryClient, user };
};

export default useUser;
