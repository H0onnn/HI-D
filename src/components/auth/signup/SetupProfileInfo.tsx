import React from 'react';
import { useFormContext } from 'react-hook-form';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { nicknameValidation } from '../../../utils/auth/validationRules';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupProfileInfo = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const nicknameValue = watch('nickname');

  const nicknameStatus = errors.nickname
    ? 'error'
    : nicknameValue && !errors.nickname
    ? 'success'
    : 'default';

  return (
    <>
      <MainComment
        style={{ fontSize: '20px', textAlign: 'center' }}
        comment='프로필을 설정해주세요'
      />
      <InputWrapper>
        <Input
          type='nickname'
          status={nicknameStatus}
          {...register('nickname', nicknameValidation)}
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
          회원가입
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupProfileInfo;
