import { PostingDataInterface } from '@/types/posting';
import { httpClient } from '../api/httpClient';
import { PostDetailInterface } from '@/types/post';

export const postNeedHelp = async (data: PostingDataInterface): Promise<PostDetailInterface> => {
  try {
    const response = await httpClient.post.post.needhelp(data);

    return response.data;
  } catch (err: unknown) {
    console.error('게시글 등록 오류 : ', err);
    throw err;
  }
};

export const postFree = async (data: PostingDataInterface): Promise<PostDetailInterface> => {
  try {
    const response = await httpClient.post.post.free(data);

    return response.data;
  } catch (err: unknown) {
    console.error('게시글 등록 오류 : ', err);
    throw err;
  }
};

export const patchPost = async (postId: number, data: PostingDataInterface): Promise<void> => {
  try {
    await httpClient.post.patch.edit(postId, data);
  } catch (err: unknown) {
    console.error('게시글 수정 오류 : ', err);
    throw err;
  }
};
