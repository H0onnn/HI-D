export interface UserDataInterface {
  memberId: number;
  mail: string;
  nickname: string;
  school: string;
  major: string;
  roles: string;
  imageUrl: string;
  createAt: string;
  updateAt: string;
  bookmarkCount: number;
  postCount: number;
  replyCount: number;
}

export interface DeleteUserInterface {
  password: string;
}

export interface EditUserInterface {
  nickname: string;
  imageUrl: string;
}

export interface EditPasswordInterface {
  password: string;
  newPassword: string;
  newPasswrodConfirm: string;
}
