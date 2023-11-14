import React from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import DELETE_IMAGE from '@/public/images/posting/delete_image.svg';
interface ImagePreviewInterface {
  src: string;
  alt: string;
  deleteImageHandler: (imageUrl: string) => void;
  setValue: UseFormSetValue<FieldValues>;
  currentImageUrls: string[];
}

const ImagePreview = ({
  src,
  alt,
  deleteImageHandler,
  setValue,
  currentImageUrls,
}: ImagePreviewInterface) => {
  const updateLocalImageState = (imageUrl: string) => {
    const updatedImageUrls = currentImageUrls.filter((url) => url !== imageUrl);
    setValue('imageUrls', updatedImageUrls);
  };

  const deleteHandler = (imageUrl: string) => {
    updateLocalImageState(imageUrl);

    deleteImageHandler(imageUrl);
  };

  return (
    <PreviewImagesContainer>
      <PreviewImages src={src} alt={alt} />
      <DeleteButton type='button' onClick={() => deleteHandler(src)}>
        <DeleteButtonIcon src={DELETE_IMAGE} alt='delete_image' />
      </DeleteButton>
    </PreviewImagesContainer>
  );
};

export default ImagePreview;

const PreviewImagesContainer = styled.div`
  position: relative;
`;

const PreviewImages = styled.img`
  width: 11rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${colors.gray2};
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
`;

const DeleteButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
