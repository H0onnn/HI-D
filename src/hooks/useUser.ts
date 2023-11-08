import { useAuthToken } from '@/store/authStore';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import { getUserData } from '@/services/user';
import { UserDataInterface } from '@/types/user';

const useUser = () => {
  const queryClient: QueryClient = useQueryClient();
  const token = useAuthToken();

  const { data: user } = useQuery<UserDataInterface>({
    queryKey: ['currnetUser'],
    queryFn: getUserData,
    enabled: !!token,
    staleTime: 1000 * 60 * 60, // 1시간
  });

  return { queryClient, user };
};

export default useUser;
