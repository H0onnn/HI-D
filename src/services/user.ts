import { httpClient } from '@/api/httpClient';
import { LoginDataInterface } from '@/types/types';
import { DeleteUserInterface, EditUserInterface, UserDataInterface } from '@/types/user';

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

export const patchUserInfo = async (data: EditUserInterface): Promise<EditUserInterface> => {
  const response = await httpClient.members.patch.myInfo(data);
  const updatedUserInfo: EditUserInterface = response.data;

  return updatedUserInfo;
};

export const deleteUser = async (data: DeleteUserInterface): Promise<void> => {
  await httpClient.members.delete.member(data);
};
