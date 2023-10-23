import React from 'react';
import styled, { css } from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { colors } from '@/constants/colors';
import { majorToEnglishMapping, MajorKeys } from '@/constants/major';

interface SelectMajorItemInterface {
  major: string;
  onClick: (major: string) => void;
  selectedMajor: string | null;
}

const SelectMajorItem = ({ major, onClick, selectedMajor }: SelectMajorItemInterface) => {
  const { register } = useFormContext();
  const englishMajor = majorToEnglishMapping[major as MajorKeys];

  const itemClickHandler = () => {
    onClick(major);
  };

  return (
    <MajorItemWrapper selected={selectedMajor === major} onClick={itemClickHandler}>
      <MajorItemInput {...register('majorCategory')} type='major_hidden' value={englishMajor} />
      {major}
    </MajorItemWrapper>
  );
};

export default SelectMajorItem;

const MajorItemWrapper = styled.div<{ selected: boolean }>`
  width: 35rem;
  height: 4.8rem;
  border-radius: 8px;
  border: 1px solid ${colors.gray2};
  font-size: 14px;
  color: ${colors.gray5};
  line-height: 21px;
  display: flex;
  align-items: center;
  padding: 1rem 1.6rem;

  cursor: pointer;

  &:hover {
    border-color: ${colors.third};
    background-color: ${colors.pastel};
    color: ${colors.primary};
  }

  ${({ selected }) =>
    selected &&
    css`
      border-color: ${colors.third};
      background-color: ${colors.pastel};
      color: ${colors.primary};
    `}
`;

const MajorItemInput = styled.input`
  display: none;
`;
