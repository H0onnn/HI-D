import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import useImageService from '@/hooks/useImageService';
import useSetupInput from '@/hooks/useSetupInput';
import MainComment from '../../public/MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { nicknameValidation } from '../../../utils/auth/validationRules';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { URL } from '../../../constants/url';
import CameraIcon from '../../../public/images/input/photo_camera.png';
import { generateRandomNickname } from '@/utils/randomNick';
import { UserDataInterface } from '@/types/user';

const SetupProfileInfo = ({ user }: { user?: UserDataInterface | undefined }) => {
  const { uploadImage } = useImageService();
  const { register: imageUrlRegister, setValue: setImageUrlValue } = useSetupInput('imageUrl');

  const {
    register: nicknameRegister,
    errors,
    status: nicknameStatus,
    setValue: setNicknameValue,
  } = useSetupInput('nickname', nicknameValidation);

  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(
    URL.DEFAULT_PROFILE_IMG,
  );

  const [nickname, setNickname] = useState<string>('');

  useEffect(() => {
    if (user) {
      setProfileImageUrl(user.imageUrl || URL.DEFAULT_PROFILE_IMG);
      setImageUrlValue('imageUrl', user.imageUrl || URL.DEFAULT_PROFILE_IMG);
    }
  }, [user, setImageUrlValue]);

  useEffect(() => {
    if (user) {
      setNickname(user.nickname || generateRandomNickname());
      setNicknameValue('nickname', user.nickname || generateRandomNickname());
    }
  }, [user, setNicknameValue, nickname]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const imageChangeClickHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const imageUrl = await uploadImage(e);
    setImageUrlValue('imageUrl', imageUrl);
    setProfileImageUrl(imageUrl);
  };

  return (
    <>
      {!user && (
        <MainComment
          style={{ fontSize: '20px', textAlign: 'center' }}
          comment='프로필을 설정해주세요'
        />
      )}
      <div style={{ position: 'relative' }}>
        <ProfileImageWrapper>
          <ProfileImage src={profileImageUrl} alt='profile_image' />
        </ProfileImageWrapper>
        <EditImageButton onClick={() => fileInputRef.current?.click()}>
          <ProfileImageEditIcon src={CameraIcon} alt='Edit Icon' />
          <ProfileImageInput
            {...imageUrlRegister('imageUrl')}
            type='file'
            accept='image/*'
            onChange={imageChangeClickHandler}
            ref={fileInputRef}
          />
        </EditImageButton>
      </div>
      <InputWrapper>
        <Input
          type='text'
          status={nicknameStatus}
          {...nicknameRegister('nickname')}
          defaultValue={nickname}
          errorMessage={
            errors.nickname && typeof errors.nickname.message === 'string'
              ? errors.nickname.message
              : undefined
          }
          placeholder='사용하실 닉네임을 입력해주세요.'
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth type='submit' disabled={nicknameStatus !== 'success'}>
          {user ? '변경하기' : '회원가입'}
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupProfileInfo;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 15.6rem;
  height: 15.6rem;
  overflow: hidden;
  border-radius: 100%;
  background: ${colors.paleGray};
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const EditImageButton = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: #f4f5ff;
  cursor: pointer;
  z-index: 1;
  bottom: 2rem;
  right: 10rem;
`;

const ProfileImageInput = styled.input`
  display: none;
`;

const ProfileImageEditIcon = styled.img`
  width: 2rem;
  height: 1.5rem;
`;
