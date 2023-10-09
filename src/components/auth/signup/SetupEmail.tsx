import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import useEmailConfirm from '../../../hooks/useEmailConfirm';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { emailValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';

const SetupEmail = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const [codeValue, setCodeValue] = useState<string>('');

  const { requestEmail, verifyCode, isVerified } = useEmailConfirm();

  const emailValue = watch('mail');

  const emailStatus = errors.mail ? 'error' : emailValue && !errors.mail ? 'success' : 'default';

  const codeStatus = codeValue ? 'success' : 'default';

  return (
    <>
      <MainComment
        style={{ fontSize: '20px' }}
        comment={`학교계정 이메일을 입력 후
이메일을 인증해주세요 :)`}
      />
      <InputWrapper style={{ marginBottom: '3rem' }}>
        <Input
          type='email'
          status={emailStatus}
          {...register('mail', emailValidation)}
          errorMessage={
            errors.mail && typeof errors.mail.message === 'string' ? errors.mail.message : undefined
          }
          placeholder='이메일을 입력해주세요.'
          button
          buttonText='인증 메일 보내기'
          onButtonClick={() => requestEmail(emailValue)}
        />
      </InputWrapper>

      <InputWrapper>
        <Input
          type='text'
          status={codeStatus}
          onChange={(e) => setCodeValue(e.target.value)}
          placeholder='인증번호를 입력해주세요.'
          button
          buttonText='인증 확인'
          onButtonClick={() => verifyCode(emailValue, codeValue)}
        />
      </InputWrapper>
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={emailStatus !== 'success' || !isVerified}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupEmail;
