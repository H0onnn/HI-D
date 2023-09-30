import React, { useState } from 'react';
import useFocus from '../../../hooks/useFocus';
import useSetupInput from '../../../hooks/useSetupInput';
import Modal from './Modal';
import NoMajorModal from './NoMajorModal';
import MainComment from '../MainComment';
import Input from '../../public/Input';
import Button from '../../public/Button';
import InputMajor from './InputMajor';
import { majorValidation } from '../../../utils/auth/validationRules';
import { ProfileSetupStepInterface } from '../../../types/types';
import { ButtonContainer, InputWrapper } from '../../../styles/styles';
import { keywordSelectHandler } from '../../../services/signupService';

const SetupMajor = ({ onNext }: ProfileSetupStepInterface) => {
  const {
    register,
    errors,
    status: majorStatus,
    debouncedValue: debouncedMajorValue,
    inputchangeHandler,
    setValue,
  } = useSetupInput('major', majorValidation);

  const { isFocus, onBlur, onFocus } = useFocus();

  const [showNoMajorModal, setShowNoMajorModal] = useState<boolean>(false);

  const [isInputMode, setIsInputMode] = useState<boolean>(false);

  // 검색된 값이 없을 때 NoMajorModal을 띄우기 위한 핸들러
  const filteredDataHandler = (count: number) => {
    if (!showNoMajorModal && count === 0) {
      setShowNoMajorModal(true);
    }
  };

  // NoMajorModal에서 학과를 직접 입력하기 위한 핸들러
  const inputModeHandler = () => setIsInputMode(true);

  return (
    <>
      {isInputMode ? (
        <InputMajor />
      ) : (
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
                keywordSelectHandler={keywordSelectHandler}
                setValue={setValue}
                onBlur={onBlur}
                onFiltered={filteredDataHandler}
              />
            )}
          </InputWrapper>
          {showNoMajorModal && (
            <NoMajorModal onInputMode={inputModeHandler} setModalState={setShowNoMajorModal} />
          )}
        </>
      )}
      <ButtonContainer>
        <Button $isFullWidth onClick={onNext} disabled={majorStatus !== 'success'}>
          다음
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupMajor;
