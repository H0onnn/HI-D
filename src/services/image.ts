import { httpClient } from '@/api/httpClient';

export const imageUpload = async (image: File): Promise<string> => {
  try {
    const response = await httpClient.image.post.upload(image);

    return response.data[0];
  } catch (err: unknown) {
    console.error('이미지 업로드 오류 : ', err);
    throw err;
  }
};

export const imageDelete = async (imageUrl: string): Promise<void> => {
  try {
    await httpClient.image.delete.delete(imageUrl);
  } catch (err: unknown) {
    console.error('이미지 삭제 오류 : ', err);
    throw err;
  }
};
