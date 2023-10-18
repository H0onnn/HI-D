import React, { useState } from 'react';
import styled from 'styled-components';
import AddImageInput from './AddImageInput';
import ImagePreview from './ImagePreview';

const AddImages = () => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const onUpload = (imageUrl: string) => {
    setUploadedImages([...uploadedImages, imageUrl]);
  };

  return (
    <AddImagesLayout>
      <AddImageInput onUpload={onUpload} uploadedImages={uploadedImages} />
      {uploadedImages.map((imageUrl, index) => (
        <ImagePreview key={index} src={imageUrl} alt='image_preview' />
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
`;
