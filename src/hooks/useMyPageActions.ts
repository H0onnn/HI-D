import { useQueryClient } from '@tanstack/react-query';
import { useAuthToken } from '@/store/authStore';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '@/store/authStore';
import useModalStore from '@/store/modalStore';
import { QUERY_KEY as userQueryKey } from './useUser';
import { deleteUser } from '@/services/user';
import { postLogout, patchPassword } from '@/services/user';
import { LINK } from '@/constants/links';
import { MODAL_TYPES } from '@/types/modal';
import toast from 'react-hot-toast';
import { DeleteUserInterface, EditPasswordInterface } from '@/types/user';

const useMyPageActions = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const logout = useLogout();
  const token = useAuthToken();
  const { closeModal, openModal } = useModalStore();

  const handleLogout = async () => {
    try {
      closeModal();
      queryClient.removeQueries({ queryKey: [userQueryKey, token] });
      await postLogout();
      logout();

      navigate(LINK.LOGIN);
      toast.success('로그아웃 되었습니다.', { id: 'logoutSuccess' });
    } catch (err: unknown) {
      console.error('로그아웃 에러 : ', err);
      toast.error('로그아웃에 실패했어요.', { id: 'logoutFail' });
    }
  };

  const logoutModalHandler = () => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: '정말 로그아웃 하시겠어요?',
        content: '로그아웃시 로그인 페이지로 이동합니다.',
        confirmText: '로그아웃',
        onConfirmHandler: handleLogout,
      },
    });
  };

  const handleDeleteAccount = async (data: DeleteUserInterface) => {
    try {
      closeModal();
      queryClient.removeQueries({ queryKey: [userQueryKey, token] });
      await deleteUser(data);
      logout();
      navigate(LINK.LOGIN);
      toast.success('회원탈퇴가 완료되었어요.', { id: 'deleteAccountSuccess' });
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes('400')) {
        toast.error('비밀번호를 확인 해주세요.', { id: 'deleteAccountError' });
        return;
      }
      toast.error('회원탈퇴 중 오류가 발생했어요.', { id: 'deleteAccountServerError' });
    }
  };

  const deleteAccountHandler = (data: DeleteUserInterface) => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: '정말 탈퇴 하시겠어요?',
        content: '회원탈퇴시 모든 데이터가 삭제됩니다.',
        confirmText: '탈퇴하기',
        onConfirmHandler: () => handleDeleteAccount(data),
      },
    });
  };

  const editPasswordHandler = async (data: EditPasswordInterface) => {
    try {
      await patchPassword(data);
      logout();
      navigate(LINK.LOGIN);
      toast.success('변경된 비밀번호로 로그인 해주세요.', { id: 'editPasswordSuccess' });
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes('400')) {
        toast.error('비밀번호를 확인 해주세요.', { id: 'editPasswordError' });
        return;
      }
      toast.error('비밀번호 변경 중 오류가 발생했어요.', { id: 'editPasswordServerError' });
    }
  };

  return {
    logoutModalHandler,
    deleteAccountHandler,
    editPasswordHandler,
  };
};

export default useMyPageActions;
