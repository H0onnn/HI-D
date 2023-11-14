import { ChangeEvent } from 'react';
import { imageUpload, imageDelete } from '@/services/image';
import toast from 'react-hot-toast';

const useImageService = () => {
  const checkImageFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      return file;
    }
    return;
  };

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = checkImageFile(e);

    try {
      const url = image && (await imageUpload(image));
      return url;
    } catch (err: unknown) {
      console.log(err);
      toast.error('이미지 업로드에 실패했어요.', { id: 'imageUploadFail' });
    }
  };

  const deleteImage = async (imageUrl: string) => {
    try {
      await imageDelete(imageUrl);
    } catch (err: unknown) {
      console.log(err);
      toast.error('이미지 삭제에 실패했어요.', { id: 'imageDeleteFail' });
    }
  };

  return {
    uploadImage,
    deleteImage,
  };
};

export default useImageService;
