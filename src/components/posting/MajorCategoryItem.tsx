import React from 'react';
import styled, { css } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { colors } from '@/constants/colors';
import { majorToEnglishMapping, MajorKeys } from '@/constants/majorCategory';
import { MajorCategoryListInterface } from './MajorCategoryList';

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
    <MajorItemWrapper
      $isSelected={$isSelected}
      $isEdit={$isEdit}
      $first={$first}
      $last={$last}
      onClick={majorSelectHandler}
    >
      <MajorItemInput {...register('majorCategory')} type='radio' value={englishMajor} />
      {major}
    </MajorItemWrapper>
  );
};

export default MajorItem;

const MajorItemInput = styled.input`
  display: none;
`;

const MajorItemWrapper = styled.div<{
  $isSelected?: boolean;
  $isEdit?: boolean;
  $first?: boolean;
  $last?: boolean;
}>`
  width: 35rem;
  height: 4.8rem;
  border: 1px solid ${colors.gray2};
  border-radius: 8px;
  font-size: 14px;
  color: ${colors.gray5};
  line-height: 21px;
  display: flex;
  align-items: center;
  padding: 1rem 1.6rem;

  &:hover {
    border-color: ${colors.third};
    background-color: ${colors.pastel};
    color: ${colors.primary};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: ${colors.third};
      background-color: ${colors.pastel};
      color: ${colors.primary};
    `}

  ${({ $isEdit, $first, $last }) =>
    $isEdit &&
    css`
      width: 20rem;
      border: 0.5px solid ${colors.gray2};
      border-radius: 0;

      ${$first &&
      css`
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      `}

      ${$last &&
      css`
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      `}
    `}
`;
