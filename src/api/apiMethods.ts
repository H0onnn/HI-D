import { PostingDataInterface } from '@/types/posting';
import { ProfileSetupDataInterface, LoginDataInterface } from '../types/types';

export const apiMethods = {
  search: {
    get: {
      school: (keyword: string) => ({
        url: `schools?keyword=${keyword}`,
      }),
      major: (keyword: string) => ({
        url: `majors?keyword=${keyword}`,
      }),
    },
  },
  mail: {
    get: {
      duplicate: (mail: string) => ({
        url: `members/mail/duplicate?mail=${mail}`,
      }),
    },
    post: {
      send: (mail: string) => ({
        url: 'mail/send',
        data: { mail },
      }),
      confirm: (mail: string, code: string) => ({
        url: 'mail/confirm',
        data: { mail, code },
      }),
    },
  },
  image: {
    post: {
      upload: (image: File) => {
        const formData = new FormData();
        formData.append('images', image);
        return {
          url: 'images',
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
      },
    },
    delete: {
      delete: (imageUrl: string) => ({
        url: `images?imageUrl=${imageUrl}`,
      }),
    },
  },
  members: {
    post: {
      signUp: (data: ProfileSetupDataInterface) => ({
        url: 'members',
        data,
      }),
      login: (data: LoginDataInterface) => ({
        url: 'login',
        data,
      }),
      logout: () => ({
        url: 'logout',
      }),
    },
  },
  auth: {
    post: {
      refreshToken: () => ({
        url: 'refresh',
      }),
    },
  },
  post: {
    post: {
      needhelp: (data: PostingDataInterface) => ({
        url: 'posts/needhelp',
        data,
      }),
      free: (data: PostingDataInterface) => ({
        url: 'posts/free',
        data,
      }),
    },
  },
};
