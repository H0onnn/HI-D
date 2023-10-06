import { httpClient } from './apiClient';

export const sendVerificationEmail = async (email: string): Promise<boolean> => {
  try {
    await httpClient.sendEmail(email);
    return true;
  } catch (error) {
    return false;
  }
};

export const sendVerificationCode = async (email: string, code: string): Promise<boolean> => {
  try {
    await httpClient.sendCode(email, code);
    return true;
  } catch (error) {
    return false;
  }
};
