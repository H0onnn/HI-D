import { AxiosError } from 'axios';
import { httpClient } from '../api/httpClient';

export const sendVerificationEmail = async (email: string): Promise<boolean> => {
  try {
    const response = await httpClient.mail.post.send(email);

    if (response) return true;

    return false;
  } catch (err: unknown) {
    console.log('이메일 전송 api 에러 : ', err);
    throw err;
  }
};

export const sendVerificationCode = async (email: string, code: string): Promise<boolean> => {
  try {
    const response = await httpClient.mail.post.confirm(email, code);

    if (response && response.data) {
      return true;
    }

    return false;
  } catch (err: unknown) {
    console.log('이메일 인증 api 에러 : ', err);
    throw err;
  }
};

export const checkDuplicateEmail = async (email: string): Promise<boolean | '중복'> => {
  try {
    const response = await httpClient.mail.get.duplicate(email);

    if (response.status === 200) {
      return true;
    }
  } catch (err: unknown) {
    const axiosError = err as AxiosError;
    if (axiosError.response && axiosError.response.status === 409) {
      return '중복';
    }
    console.log('이메일 중복 확인 api 에러 :', err);
    return false;
  }

  throw new Error('Unknown error occurred.');
};
