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
    },
  },
};
