import React from 'react';
import { MAJORS } from '@/constants/majorCategory';
import MajorCategoryItem from './MajorCategoryItem';
import { CommonListLayout } from '@/styles/selectableItem';

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
    <CommonListLayout $isEdit={$isEdit}>
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
    </CommonListLayout>
  );
};

export default MajorCategoryList;
