import { httpClient } from '@/api/httpClient';
import { LoginDataInterface } from '@/types/types';
import { DeleteUserInterface, UserDataInterface } from '@/types/user';

export const getToken = async (data: LoginDataInterface) => {
  const response = await httpClient.members.post.login(data);
  const token = response.headers['authorization'];

  return token;
};

export const postLogout = async () => {
  await httpClient.members.post.logout();
};

export const getUserData = async (): Promise<UserDataInterface> => {
  const response = await httpClient.members.get.myData();
  const userData: UserDataInterface = response.data;
  console.log('유저 데이터 : ', userData);

  return userData;
};

export const deleteUser = async (data: DeleteUserInterface): Promise<void> => {
  await httpClient.members.delete.member(data);
};
