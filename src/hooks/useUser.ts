import useAuthStore from '@/store/authStore';
import { useQuery, useQueryClient, QueryClient } from '@tanstack/react-query';
import { getUserData } from '@/services/user';
import { UserDataInterface } from '@/types/user';

const useUser = () => {
  const queryClient: QueryClient = useQueryClient();
  const token = useAuthStore((state) => state.token);

  const { data: user } = useQuery<UserDataInterface, Error>({
    queryKey: ['currnetUser'],
    queryFn: getUserData,
    enabled: !!token,
    staleTime: 1000 * 60 * 60, // 1시간
  });

  // 유저 데이터 업데이트하기
  //   const mutation = useMutation(updateUser, {
  //     onSuccess: () => {
  // 데이터가 성공적으로 업데이트되면, 캐시를 무효화하여 다시 가져옵니다.
  //       queryClient.invalidateQueries('user');
  //     },
  //   });

  // const setUser = (userData) => {
  //   mutation.mutate(userData);
  // };

  return { queryClient, user };
};

export default useUser;
