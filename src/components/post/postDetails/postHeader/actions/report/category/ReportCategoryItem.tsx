import React from 'react';
import styled from 'styled-components';
import useSetupInput from '@/hooks/useSetupInput';
import { reportToEnglishMapping, ReportKeys } from '@/constants/report';
import { CommonItemWrapper } from '@/styles/selectableItem';
import { ReportCategoryListInterface } from './ReportCategoryList';
import { reportCategoryValidation } from '@/utils/posting/postValidationRules';

interface ReportCategoryItemInterface extends ReportCategoryListInterface {
  value: string;
  $isSelected?: boolean;
}

const ReportCategoryItem = ({ value, onValueSelect, $isSelected }: ReportCategoryItemInterface) => {
  const { register, setValue } = useSetupInput('type', reportCategoryValidation);
  const englishReport = reportToEnglishMapping[value as ReportKeys];

  const reportSelectHandler = () => {
    onValueSelect(value);
    setValue('type', englishReport);
  };

  return (
    <CommonItemWrapper $isSelected={$isSelected} onClick={reportSelectHandler}>
      <ItemInput {...register('type')} type='radio' value={englishReport} />
      {value}
    </CommonItemWrapper>
  );
};

export default ReportCategoryItem;

const ItemInput = styled.input`
  display: none;
`;
