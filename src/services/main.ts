import { PostListInterface } from '@/types/post';
import { httpClient } from '../api/httpClient';

export const getWeeklyHotPostList = async (): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.weeklyhot();
    return response.data;
  } catch (err: unknown) {
    console.error('get post error : ', err);
    throw err;
  }
};

export const getDailyHotPostList = async (): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.dailyhot();
    return response.data;
  } catch (err: unknown) {
    console.error('get post error : ', err);
    throw err;
  }
};

export const getHelpPostListByMain = async (): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.needhelp({
      page: 1,
      size: 3,
      sortBy: 'createAt',
      direction: 'DESC',
      keyword: '',
      majorCategory: '',
    });
    return response.data;
  } catch (err: unknown) {
    console.error('get post error : ', err);
    throw err;
  }
};

export const getFreePostListByMain = async (tag?: string): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.free({
      page: 1,
      size: 3,
      sortBy: 'createAt',
      direction: 'DESC',
      keyword: '',
      tag,
    });
    return response.data;
  } catch (err: unknown) {
    console.error('get post error : ', err);
    throw err;
  }
};
