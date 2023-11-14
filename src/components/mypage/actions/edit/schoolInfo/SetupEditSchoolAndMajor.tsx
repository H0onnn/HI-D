import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useUserMutation from '@/hooks/useUserMutation';
import GenericForm from '@/components/public/form/GenericForm';
import Input from '@/components/public/Input';
import Button from '@/components/public/Button';
import MainComment from '@/components/public/MainComment';
import SlideUpModal from '@/components/public/SlideUpModal';
import SetupEditSchool from './SetupEditSchool';
import SetupEditMajor from './SetupEditMajor';
import { InputWrapper, ButtonContainer } from '@/styles/styles';
import { UserDataInterface, EditSchoolInterface, EditMajorInterface } from '@/types/user';
import { LINK } from '@/constants/links';
import { colors } from '@/constants/colors';

const SetupEditSchoolAndMajor = ({ user }: { user: UserDataInterface | undefined }) => {
  const navigate = useNavigate();
  const { editSchoolHandler, editMajorHandler } = useUserMutation();
  const [isSchoolModalOpen, setIsSchoolModalOpen] = useState<boolean>(false);
  const [isMajorModalOpen, setIsMajorModalOpen] = useState<boolean>(false);

  const toggleSchoolModalHandler = () => setIsSchoolModalOpen((prev) => !prev);
  const toggleMajorModalHandler = () => setIsMajorModalOpen((prev) => !prev);

  const editSchoolSubmitHandler = (data: EditSchoolInterface) => {
    editSchoolHandler(data);
    toggleSchoolModalHandler();
  };

  const editMajorSubmitHandler = (data: EditMajorInterface) => {
    editMajorHandler(data);
    toggleMajorModalHandler();
  };

  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학교 수정' />
      <InputWrapper style={{ marginBottom: '3rem' }}>
        <Input
          type='text'
          value={user?.school}
          disabled={true}
          status='success'
          button
          buttonText='변경하기'
          onButtonClick={toggleSchoolModalHandler}
          style={{ color: colors.gray5 }}
        />
      </InputWrapper>
      {isSchoolModalOpen && (
        <SlideUpModal setModalState={toggleSchoolModalHandler}>
          <GenericForm<EditSchoolInterface>
            formOptions={{ mode: 'onChange' }}
            onSubmit={editSchoolSubmitHandler}
          >
            <SetupEditSchool />
          </GenericForm>
        </SlideUpModal>
      )}

      <MainComment style={{ fontSize: '20px' }} comment='학과 수정' />
      <InputWrapper>
        <Input
          type='text'
          value={user?.major}
          disabled={true}
          status='success'
          button
          buttonText='변경하기'
          onButtonClick={toggleMajorModalHandler}
          style={{ color: colors.gray5 }}
        />
      </InputWrapper>
      {isMajorModalOpen && (
        <SlideUpModal setModalState={toggleMajorModalHandler}>
          <GenericForm<EditMajorInterface>
            formOptions={{ mode: 'onChange' }}
            onSubmit={editMajorSubmitHandler}
          >
            <SetupEditMajor />
          </GenericForm>
        </SlideUpModal>
      )}

      <ButtonContainer>
        <Button $isFullWidth onClick={() => navigate(LINK.MYPAGE)}>
          확인
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupEditSchoolAndMajor;
