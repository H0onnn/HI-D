import React from 'react';
import useFocus from '../../../hooks/useFocus';
import useSetupInput from '../../../hooks/useSetupInput';
import useSchoolMajorData from '../../../hooks/useSchoolMajorData';
import Modal from './SearchModal';
import MainComment from '../../public/MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import { majorValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';
import { applyKeywordToField } from '../../../services/signupService';

const SetupMajor = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    errors,
    status: majorStatus,
    debouncedValue: debouncedMajorValue,
    inputchangeHandler,
    setValue,
    value,
  } = useSetupInput('major', majorValidation);

  const { datas } = useSchoolMajorData('major', debouncedMajorValue);

  const { isFocus, onBlur, onFocus } = useFocus();

  const isValueInData = datas.includes(value);

  const isNextButtonActive = isValueInData && majorStatus === 'success';

  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학과를 선택해주세요' />
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
          placeholder='학과 이름을 검색해주세요.'
          onFocus={onFocus}
          onChange={inputchangeHandler}
        />
        {isFocus && (
          <Modal
            fieldName='major'
            searchValue={debouncedMajorValue}
            keywordSelectHandler={applyKeywordToField}
            setValue={setValue}
            onBlur={onBlur}
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

export default SetupMajor;
