import React from 'react';
import { useFormContext } from 'react-hook-form';
import useFocus from '../../../hooks/useFocus';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import { majorValidation } from '../../../utils/auth/validationRules';
import { InputWrapper } from '../../../styles/styles';

const InputMajor = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const { onFocus } = useFocus();

  const majorValue = watch('major');

  const majorStatus = errors.major ? 'error' : majorValue && !errors.major ? 'success' : 'default';

  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학과 직접 입력하기' />
      <InputWrapper>
        <Input
          type='major'
          status={majorStatus}
          {...register('major', majorValidation)}
          errorMessage={
            errors.major && typeof errors.major.message === 'string'
              ? errors.major.message
              : undefined
          }
          placeholder='학과 이름을 입력해주세요.'
          onFocus={onFocus}
        />
      </InputWrapper>
    </>
  );
};

export default InputMajor;
