import { useState } from 'react';
import {
  sendVerificationEmail,
  sendVerificationCode,
  checkDuplicateEmail,
} from '../api/services/emailConfirm';
import toast from 'react-hot-toast';

const useEmailConfirm = () => {
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const requestEmail = async (email: string) => {
    try {
      const isNotDuplicate = await checkDuplicate(email);
      if (!isNotDuplicate) {
        return;
      }

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
        });
      } else {
        toast.error('인증 코드를 확인해주세요.', {
          id: 'email-verify-fail',
        });
      }
    } catch (error) {
      toast.error('서버 오류로 인해 메일 인증에 실패했습니다.', {
        id: 'email-verify-server-fail',
      });
    }
  };

  const checkDuplicate = async (email: string) => {
    try {
      const result = await checkDuplicateEmail(email);

      if (result === true) {
        return true;
      } else if (result === '중복') {
        toast.error('이미 가입된 이메일이에요.', {
          id: 'duplicate-check-fail',
        });
        return false;
      }
      toast.error('이메일 중복 확인에 실패했습니다.', {
        id: 'duplicate-check-general-fail',
      });
      return false;
    } catch (error) {
      toast.error('서버 오류가 발생했습니다.', {
        id: 'duplicate-check-server-fail',
      });
      return false;
    }
  };

  return { requestEmail, verifyCode, isEmailSent, isVerified };
};

export default useEmailConfirm;
