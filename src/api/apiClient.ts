import axios from 'axios';
import { URL } from '../constants/url';
import useAuthStore from '../store/authStore';
import { ProfileSetupDataInterface } from '../types/types';

class AxiosClient {
  #instance;
  #baseURL;

  constructor(baseURL: string) {
    this.#baseURL = baseURL;
    this.#instance = axios.create({
      baseURL: this.#baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.#setUpInterceptors();
  }

  #setUpInterceptors() {
    this.#instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          return Promise.reject(error);
        } else if (error.request) {
          console.log('요청 전송 오류: 서버에 요청을 보낼 수 없습니다.');
        } else {
          console.log('요청 준비 오류: 요청을 처리하는 도중 오류가 발생했습니다.');
        }

        return Promise.reject(error);
      },
    );

    this.#instance.interceptors.request.use(
      (config) => {
        const token = useAuthStore.getState().token;
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: unknown) => {
        return Promise.reject(error);
      },
    );
  }

  async searchSchool(keyword: string) {
    try {
      const res = await this.#instance.get(`schools?keyword=${keyword}`);
      return res.data;
    } catch (err: unknown) {
      console.log(err);
    }
  }

  async searchMajor(keyword: string) {
    try {
      const res = await this.#instance.get(`majors?keyword=${keyword}`);
      return res.data;
    } catch (err: unknown) {
      console.log(err);
    }
  }

  async sendEmail(mail: string) {
    try {
      const res = await this.#instance.post('mail/send', { mail });
      return res;
    } catch (err: unknown) {
      console.log(err);
      throw err;
    }
  }

  async sendCode(mail: string, code: string) {
    try {
      const res = await this.#instance.post('mail/confirm', { mail, code });
      return res;
    } catch (err: unknown) {
      console.log(err);
      throw err;
    }
  }

  async setupImage(image: File) {
    const formData = new FormData();
    formData.append('images', image);

    try {
      const res = await this.#instance.post('images', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data;
    } catch (err: unknown) {
      console.log('이미지 업로드 에러 : ', err);
      throw err;
    }
  }

  async signUp(data: ProfileSetupDataInterface) {
    try {
      const res = await this.#instance.post('members', { data });
      return res.data;
    } catch (err: unknown) {
      console.log('회원가입 에러 : ', err);
      throw err;
    }
  }

  async login(email: string, password: string) {
    try {
      const res = await this.#instance.post('login', { email, password });
      return res.data;
    } catch (err: unknown) {
      console.log('로그인 에러 : ', err);
      throw err;
    }
  }
}

export const httpClient = new AxiosClient(URL.API_BASE_URL);
