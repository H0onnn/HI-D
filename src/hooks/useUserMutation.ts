import { useNavigate } from 'react-router-dom';
import { useQueryClient, useMutation, UseMutateFunction } from '@tanstack/react-query';
import { QUERY_KEY as userQueryKey } from './useUser';
import { EditMajorInterface, EditSchoolInterface, EditUserInterface } from '@/types/user';
import { LINK } from '@/constants/links';
import { patchUserInfo, patchSchool, patchMajor } from '@/services/user';
import toast from 'react-hot-toast';

interface UseUserMutationReturnType {
  editUserHandler: UseMutateFunction<EditUserInterface, Error, EditUserInterface, unknown>;
  editSchoolHandler: UseMutateFunction<void, Error, EditSchoolInterface, unknown>;
  editMajorHandler: UseMutateFunction<void, Error, EditMajorInterface, unknown>;
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

  const editSchoolMutation = useMutation<void, Error, EditSchoolInterface>({
    mutationFn: (variables) => patchSchool(variables),
    onError: () => {
      toast.error('학교 정보 수정에 실패했어요.', { id: 'editSchoolError' });
    },
    onSuccess: () => {
      toast.success('학교 정보가 수정되었어요.', { id: 'editSchoolSuccess' });
      queryClient.invalidateQueries({ queryKey: [userQueryKey] });
    },
  });

  const editSchoolHandler = editSchoolMutation.mutate;

  const editMajorMutation = useMutation<void, Error, EditMajorInterface>({
    mutationFn: (variables) => patchMajor(variables),
    onError: () => {
      toast.error('학과 정보 수정에 실패했어요.', { id: 'editMajorError' });
    },
    onSuccess: () => {
      toast.success('학과 정보가 수정되었어요.', { id: 'editMajorSuccess' });
      queryClient.invalidateQueries({ queryKey: [userQueryKey] });
    },
  });

  const editMajorHandler = editMajorMutation.mutate;

  return {
    editUserHandler,
    editSchoolHandler,
    editMajorHandler,
  };
};

export default useUserMutation;
