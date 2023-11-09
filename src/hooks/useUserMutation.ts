import { useNavigate } from 'react-router-dom';
import { useQueryClient, useMutation, UseMutateFunction } from '@tanstack/react-query';
import { QUERY_KEY as userQueryKey } from './useUser';
import { EditUserInterface } from '@/types/user';
import { LINK } from '@/constants/links';
import { patchUserInfo } from '@/services/user';
import toast from 'react-hot-toast';

interface UseUserMutationReturnType {
  editUserHandler: UseMutateFunction<EditUserInterface, Error, EditUserInterface, unknown>;
}

const useUserMutation = (): UseUserMutationReturnType => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const editUserMutation = useMutation<EditUserInterface, Error, EditUserInterface>({
    mutationFn: (variables) => patchUserInfo(variables),
    onError: () => {
      toast.error('회원정보 수정에 실패했어요.', { id: 'editUserError' });
    },
    onSuccess: () => {
      toast.success('회원정보가 수정되었어요.', { id: 'editUserSuccess' });
      queryClient.invalidateQueries({ queryKey: [userQueryKey] });
      navigate(LINK.MYPAGE);
    },
  });

  const editUserHandler = editUserMutation.mutate;

  return {
    editUserHandler,
  };
};

export default useUserMutation;
