import React from 'react';
import useSetupInput from '@/hooks/useSetupInput';
import styled from 'styled-components';
import { majorToEnglishMapping, MajorKeys } from '@/constants/majorCategory';
import { MajorCategoryListInterface } from './MajorCategoryList';
import { CommonItemWrapper } from '@/styles/selectableItem';

interface MajorCategoryItemInterface extends MajorCategoryListInterface {
  major: string;
  $isSelected?: boolean;
  $first?: boolean;
  $last?: boolean;
  register?: ReturnType<typeof useSetupInput>['register'];
  setValue?: ReturnType<typeof useSetupInput>['setValue'];
}

const MajorItem = ({
  major,
  onMajorSelect,
  $isSelected,
  $isEdit,
  $first,
  $last,
  register: propRegister,
  setValue: propSetValue,
}: MajorCategoryItemInterface) => {
  const englishMajor = majorToEnglishMapping[major as MajorKeys];
  const { register: localRegister, setValue: localSetValue } = useSetupInput(
    'majorCategory',
    undefined,
    'default',
    englishMajor,
  );

  const register = propRegister || localRegister;
  const setValue = propSetValue || localSetValue;

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
