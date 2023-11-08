import { useNavigate } from 'react-router-dom';
import { deleteUser } from '@/services/user';
import { useLogout } from '@/store/authStore';
import { postLogout } from '@/services/user';
import useModalStore from '@/store/modalStore';
import { LINK } from '@/constants/links';
import { MODAL_TYPES } from '@/types/modal';
import toast from 'react-hot-toast';
import { DeleteUserInterface } from '@/types/user';

const useMyPageActions = () => {
  const navigate = useNavigate();
  const logout = useLogout();
  const { closeModal, openModal } = useModalStore();

  const handleLogout = async () => {
    try {
      await postLogout();
      logout();
      closeModal();
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
      await deleteUser(data);
      navigate(LINK.LOGIN);
      toast.success('회원탈퇴가 완료되었어요.', { id: 'deleteAccountSuccess' });
    } catch (err: unknown) {
      if (err instanceof Error) {
        toast.error(err.message, { id: 'deleteAccountError' });
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

  return {
    logoutModalHandler,
    deleteAccountHandler,
  };
};

export default useMyPageActions;
