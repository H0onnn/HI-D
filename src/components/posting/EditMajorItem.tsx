import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { useFormContext } from 'react-hook-form';
import { majorToEnglishMapping, MajorKeys } from '@/constants/major';

interface EditMajorItemInterface {
  major: string;
  majorChangeHandler: (major: string) => void;
}

const EditMajorItem = ({ major, majorChangeHandler }: EditMajorItemInterface) => {
  const { register } = useFormContext();
  const englishMajor = majorToEnglishMapping[major as MajorKeys];

  return (
    <MajorItemWrapper onClick={() => majorChangeHandler(major)}>
      <MajorItemInput {...register('major')} type='major_edit_hidden' value={englishMajor} />
      {englishMajor}
    </MajorItemWrapper>
  );
};

export default EditMajorItem;

const MajorItemWrapper = styled.div`
  width: 20rem;
  height: 4.8rem;
  border: 0.5px solid ${colors.gray2};
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
`;

const MajorItemInput = styled.input`
  display: none;
`;
