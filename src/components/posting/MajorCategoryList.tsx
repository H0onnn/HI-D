import React from 'react';
import { styled, css } from 'styled-components';
import { MAJORS } from '@/constants/majorCategory';
import MajorCategoryItem from './MajorCategoryItem';

export interface MajorCategoryListInterface {
  onMajorSelect: (major: string) => void;
  selectedMajor?: string | null;
  $isEdit?: boolean;
}

const MajorCategoryList = ({
  onMajorSelect,
  selectedMajor,
  $isEdit,
}: MajorCategoryListInterface) => {
  return (
    <ListLayout $isEdit={$isEdit}>
      {MAJORS.map((major, index, array) => (
        <MajorCategoryItem
          key={major}
          major={major}
          onMajorSelect={onMajorSelect}
          $isSelected={selectedMajor === major}
          $isEdit={$isEdit}
          $first={index === 0}
          $last={index === array.length - 1}
        />
      ))}
    </ListLayout>
  );
};

export default MajorCategoryList;

const ListLayout = styled.div<{ $isEdit?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  ${({ $isEdit }) =>
    $isEdit &&
    css`
      gap: 0;
    `}
`;
