import { requestSignup } from '@/services/signup';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';
import { ProfileSetupDataInterface } from '@/types/types';

const useSignup = () => {
  const navigate = useNavigate();

  const submitSignup =
    () =>
    async (data: ProfileSetupDataInterface): Promise<void> => {
      try {
        await requestSignup(data);
        toast.success('회원가입이 완료되었어요.', {
          id: 'signupSuccess',
        });
        navigate(LINK.SIGNUP_SUCCESS);
      } catch (err: unknown) {
        toast.error('회원가입에 실패했어요.', {
          id: 'signupFail',
        });
      }
    };

  return {
    submitSignup,
  };
};

export default useSignup;
