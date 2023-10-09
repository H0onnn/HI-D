import { httpClient } from '../httpClient';

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
