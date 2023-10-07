import { httpClient } from '../apiClient';

export const sendVerificationEmail = async (email: string): Promise<boolean> => {
  try {
    await httpClient.sendEmail(email);
    return true;
  } catch (err: unknown) {
    console.log('이메일 전송 api 에러 : ', err);
    throw err;
  }
};

export const sendVerificationCode = async (email: string, code: string): Promise<boolean> => {
  try {
    const result = await httpClient.sendCode(email, code);
    if (result) return true;
    return false;
  } catch (err: unknown) {
    console.log('이메일 인증 api 에러 : ', err);
    throw err;
  }
};
