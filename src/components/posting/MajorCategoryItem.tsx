import React from 'react';
import styled from 'styled-components';
import useSetupInput from '@/hooks/useSetupInput';
import { majorToEnglishMapping, MajorKeys } from '@/constants/majorCategory';
import { MajorCategoryListInterface } from './MajorCategoryList';
import { CommonItemWrapper } from '@/styles/selectableItem';
import { PostDetailInterface } from '@/types/post';

interface MajorCategoryItemInterface extends MajorCategoryListInterface {
  major: string;
  $isSelected?: boolean;
  $first?: boolean;
  $last?: boolean;
  initialMajorCategory?: PostDetailInterface['majorCategory'];
}

const MajorItem = ({
  major,
  onMajorSelect,
  $isSelected,
  $isEdit,
  $first,
  $last,
  initialMajorCategory,
}: MajorCategoryItemInterface) => {
  const englishMajor = majorToEnglishMapping[major as MajorKeys];

  const { register, setValue } = useSetupInput(
    'majorCategory',
    undefined,
    'default',
    initialMajorCategory,
  );

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
