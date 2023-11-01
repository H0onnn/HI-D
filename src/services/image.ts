import { httpClient } from '@/api/httpClient';

export const imageDelete = async (imageUrl: string): Promise<void> => {
  try {
    await httpClient.image.delete.delete(imageUrl);
  } catch (err: unknown) {
    console.error('이미지 삭제 오류 : ', err);
    throw err;
  }
};
