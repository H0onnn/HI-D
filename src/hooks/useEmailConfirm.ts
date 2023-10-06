import { useState } from 'react';
import { sendVerificationEmail, sendVerificationCode } from '../api/emailConfirm';
import toast from 'react-hot-toast';

const useEmailConfirm = () => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const requestEmail = async (email: string) => {
    try {
      const success = await sendVerificationEmail(email);
      if (success) {
        setIsEmailSent(true);
        toast.success('인증 메일이 발송되었습니다.', {
          id: 'email-sent-success',
          duration: 1500,
        });
      } else {
        toast.error('인증 메일 발송에 실패했습니다.', {
          id: 'email-sent-fail',
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error('서버 오류로 인해 인증 메일 발송에 실패했습니다.', {
        id: 'email-sent-server-fail',
        duration: 1500,
      });
    }
  };

  const verifyCode = async (email: string, code: string) => {
    try {
      const success = await sendVerificationCode(email, code);
      if (success) {
        setIsVerified(true);
        toast.success('메일 인증에 성공했습니다.', {
          id: 'email-verify-success',
          duration: 1500,
        });
      } else {
        toast.error('메일 인증에 실패했습니다.', {
          id: 'email-verify-fail',
          duration: 1500,
        });
      }
    } catch (error) {
      toast.error('서버 오류로 인해 메일 인증에 실패했습니다.', {
        id: 'email-verify-server-fail',
        duration: 1500,
      });
    }
  };

  return { requestEmail, verifyCode, isEmailSent, isVerified };
};

export default useEmailConfirm;
