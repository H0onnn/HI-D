import React, { useState } from 'react';
import styled from 'styled-components';
import AddImageInput from './AddImageInput';
import ImagePreview from './ImagePreview';
import { PostDetailInterface } from '@/types/post';

interface AddImagesInterface {
  initialImages?: PostDetailInterface['images'];
}

const AddImages = ({ initialImages }: AddImagesInterface) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>(initialImages || []);

  const onUpload = (imageUrl: string) => {
    setUploadedImages([...uploadedImages, imageUrl]);
  };

  const deleteImage = (imageUrl: string) => {
    setUploadedImages(uploadedImages.filter((image) => image !== imageUrl));
  };

  return (
    <AddImagesLayout>
      <AddImageInput onUpload={onUpload} uploadedImages={uploadedImages} />
      {uploadedImages.map((imageUrl, index) => (
        <ImagePreview key={index} src={imageUrl} alt='image_preview' deleteImage={deleteImage} />
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
