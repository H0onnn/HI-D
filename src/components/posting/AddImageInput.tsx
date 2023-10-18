import React, { useRef, ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import ADD_IMAGE_ICON from '@/public/images/posting/add_image_camera.svg';
import { PostingDataInterface } from '@/types/posting';
import { httpClient } from '@/api/httpClient';
import toast from 'react-hot-toast';

interface AddImageInputInterface {
  onUpload: (imageUrl: string) => void;
  uploadedImages: string[];
}

const AddImageInput = ({ onUpload, uploadedImages }: AddImageInputInterface) => {
  const { register, setValue } = useFormContext<PostingDataInterface>();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0 && uploadedImages.length < 3) {
      const file = e.target.files[0];
      try {
        const image = await httpClient.image.post.upload(file);
        const imageUrl = image.data[0];

        onUpload(imageUrl);
        setValue('imageUrls', imageUrl);
      } catch (err: unknown) {
        console.log(err);
        toast.error('이미지 업로드에 실패했습니다.', { id: 'imageUploadFail' });
      }
    }
  };

  return (
    <AddImageInputContainer>
      <AddImageButton onClick={() => fileInputRef.current?.click()}>
        <AddImageIcon src={ADD_IMAGE_ICON} alt='add_image' />
        <ImageInput
          {...register('imageUrls')}
          type='file'
          accept='image/*'
          ref={fileInputRef}
          onChange={imageChangeHandler}
        />
      </AddImageButton>
      <AddImageText>사진 {uploadedImages.length}/3</AddImageText>
    </AddImageInputContainer>
  );
};

export default AddImageInput;

const AddImageInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  min-width: 11rem;
  width: 11rem;
  height: 11rem;
  border: 2px solid ${colors.gray2};
  border-radius: 8px;
  cursor: pointer;
`;

const AddImageButton = styled.div`
  width: 4rem;
  height: 3rem;
  overflow: hidden;
`;

const AddImageIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AddImageText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.gray5};
`;

const ImageInput = styled.input`
  display: none;
`;
