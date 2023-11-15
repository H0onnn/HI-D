import React, { useState } from 'react';
import useImageService from '@/hooks/useImageService';
import useSetupInput from '@/hooks/useSetupInput';
import styled from 'styled-components';
import AddImageInput from './AddImageInput';
import ImagePreview from './ImagePreview';
import { PostDetailInterface } from '@/types/post';
interface AddImagesInterface {
  initialImages?: PostDetailInterface['images'];
}

const AddImages = ({ initialImages }: AddImagesInterface) => {
  const { register, setValue, getValues } = useSetupInput(
    'imageUrls',
    undefined,
    undefined,
    initialImages,
  );
  const { uploadImage, deleteImage } = useImageService();
  const [uploadedImages, setUploadedImages] = useState<string[]>(initialImages || []);

  const currentImageUrls: string[] = getValues().imageUrls || [];

  const onUpload = (imageUrl: string) => {
    setUploadedImages([...uploadedImages, imageUrl]);
  };

  const deleteLocalImage = (imageUrl: string) => {
    setUploadedImages(uploadedImages.filter((image) => image !== imageUrl));
  };

  const deleteImageHandler = async (imageUrl: string) => {
    deleteLocalImage(imageUrl);

    await deleteImage(imageUrl);
  };

  return (
    <AddImagesLayout>
      <AddImageInput
        onUpload={onUpload}
        uploadedImages={uploadedImages}
        uploadImageHandler={uploadImage}
        register={register}
        setValue={setValue}
        currentImageUrls={currentImageUrls}
      />
      {uploadedImages.map((imageUrl, index) => (
        <ImagePreview
          key={index}
          src={imageUrl}
          alt='image_preview'
          setValue={setValue}
          currentImageUrls={currentImageUrls}
          deleteImageHandler={deleteImageHandler}
        />
      ))}
    </AddImagesLayout>
  );
};

export default AddImages;

const AddImagesLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
