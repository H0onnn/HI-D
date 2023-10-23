import React from 'react';
import styled from 'styled-components';
import EditMajorItem from './EditMajorItem';
import { MAJORS } from '@/constants/majorCategory';

interface EditMajorListInterface {
  majorChangeHandler: (major: string) => void;
}

const EditMajorList = ({ majorChangeHandler }: EditMajorListInterface) => {
  return (
    <MajorListLayout>
      {MAJORS.map((major) => (
        <EditMajorItem key={major} major={major} majorChangeHandler={majorChangeHandler} />
      ))}
    </MajorListLayout>
  );
};

export default EditMajorList;

const MajorListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
