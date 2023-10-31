import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { majorToEnglishMapping, MajorKeys } from '@/constants/majorCategory';
import { MajorCategoryListInterface } from './MajorCategoryList';
import { CommonItemWrapper } from '@/styles/selectableItem';

interface MajorCategoryItemInterface extends MajorCategoryListInterface {
  major: string;
  $isSelected?: boolean;
  $first?: boolean;
  $last?: boolean;
}

const MajorItem = ({
  major,
  onMajorSelect,
  $isSelected,
  $isEdit,
  $first,
  $last,
}: MajorCategoryItemInterface) => {
  const { register, setValue } = useFormContext();
  const englishMajor = majorToEnglishMapping[major as MajorKeys];

  const majorSelectHandler = () => {
    onMajorSelect(major);
    setValue('majorCategory', englishMajor);
  };

  return (
    <CommonItemWrapper
      $isSelected={$isSelected}
      $isEdit={$isEdit}
      $first={$first}
      $last={$last}
      onClick={majorSelectHandler}
    >
      <MajorItemInput {...register('majorCategory')} type='radio' value={englishMajor} />
      {major}
    </CommonItemWrapper>
  );
};

export default MajorItem;

const MajorItemInput = styled.input`
  display: none;
`;
