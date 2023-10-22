import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import DELETE_IMAGE from '@/public/images/posting/delete_image.svg';
import { PostingDataInterface } from '@/types/posting';
import { httpClient } from '@/api/httpClient';
import toast from 'react-hot-toast';
interface ImagePreviewInterface {
  src: string;
  alt: string;
  deleteImage: (imageUrl: string) => void;
}

const ImagePreview = ({ src, alt, deleteImage }: ImagePreviewInterface) => {
  const { setValue, getValues } = useFormContext<PostingDataInterface>();

  const deleteImageFromServer = async (imageUrl: string) => {
    await httpClient.image.delete.delete(imageUrl);
  };

  const updateLocalImageState = (imageUrl: string) => {
    deleteImage(imageUrl);
    const currentImageUrls: string[] = getValues().imageUrls || [];
    const updatedImageUrls = currentImageUrls.filter((url) => url !== imageUrl);
    setValue('imageUrls', updatedImageUrls);
  };

  const deleteImageHandler = async (imageUrl: string) => {
    try {
      await deleteImageFromServer(imageUrl);
      updateLocalImageState(imageUrl);
    } catch (err: unknown) {
      console.log(err);
      toast.error('이미지 삭제에 실패했습니다.', { id: 'imageDeleteFail' });
    }
  };

  return (
    <PreviewImagesContainer>
      <PreviewImages src={src} alt={alt} />
      <DeleteButton type='button' onClick={() => deleteImageHandler(src)}>
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
