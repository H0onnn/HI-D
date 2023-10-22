import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import EditMajorModal from './EditMajorModal';
import EditMajorList from './EditMajorList';
import DROP_BUTTON from '@/public/images/posting/drop_btn.svg';

interface EditMajorDropBoxInterface {
  major: string | null;
}

const EditMajorDropBox = ({ major: currentMajor }: EditMajorDropBoxInterface) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // eslint-disable-next-line
  const [changeMajor, setChangeMajor] = useState<string | null>(currentMajor);

  const majorChangeHandler = (major: string) => {
    setChangeMajor(major);
    setIsModalOpen(false);
  };

  const dropButtonClickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <DropBoxLayout>
      <DropBoxText>{changeMajor}</DropBoxText>
      <DropButtonWrapper>
        <DropButton onClick={dropButtonClickHandler}>
          <DropButtonImg src={DROP_BUTTON} alt='drop_button' />
        </DropButton>
      </DropButtonWrapper>
      {isModalOpen && (
        <EditMajorModal>
          <EditMajorList majorChangeHandler={majorChangeHandler} />
        </EditMajorModal>
      )}
    </DropBoxLayout>
  );
};

export default EditMajorDropBox;

const DropBoxLayout = styled.div`
  width: 16.5rem;
  height: 2.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-left: 2rem;
  margin-bottom: 1rem;
`;

const DropBoxText = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: ${colors.gray6};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DropButtonWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

const DropButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

const DropButtonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
