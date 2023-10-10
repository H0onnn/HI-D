import React from 'react';
import useFocus from '../../../hooks/useFocus';
import useSetupInput from '../../../hooks/useSetupInput';
import useSchoolMajorData from '../../../hooks/useSchoolMajorData';
import Modal from './Modal';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { schoolValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';
import { keywordSelectHandler } from '../../../services/signupService';

const SetupSchool = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    errors,
    status: schoolStatus,
    debouncedValue: debouncedSchoolValue,
    inputchangeHandler,
    setValue,
    value,
  } = useSetupInput('school', schoolValidation);

  const { datas } = useSchoolMajorData('school', debouncedSchoolValue);

  const { isFocus, onBlur, onFocus } = useFocus();

  const isValueInData = datas.includes(value);

  const isNextButtonActive = isValueInData && schoolStatus === 'success';

  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학교를 선택해주세요' />
      <InputWrapper>
        <Input
          type='school'
          status={schoolStatus}
          {...register('school')}
          errorMessage={
            errors.school && typeof errors.school.message === 'string'
              ? errors.school.message
              : undefined
          }
          placeholder='학교 이름을 검색해주세요.'
          onFocus={onFocus}
          onChange={inputchangeHandler}
        />
        {isFocus && (
          <Modal
            fieldName='school'
            searchValue={debouncedSchoolValue}
            keywordSelectHandler={keywordSelectHandler}
            onBlur={onBlur}
            setValue={setValue}
          />
        )}
      </InputWrapper>

      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={!isNextButtonActive}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupSchool;
