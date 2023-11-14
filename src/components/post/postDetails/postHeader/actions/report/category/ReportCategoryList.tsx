import React from 'react';
import { REPORT_CATEGORIES } from '@/constants/report';
import ReportCategoryItem from './ReportCategoryItem';
import { CommonListLayout } from '@/styles/selectableItem';

export interface ReportCategoryListInterface {
  onValueSelect: (major: string) => void;
  selectedValue?: string | null;
}

const ReportCategoryList = ({ onValueSelect, selectedValue }: ReportCategoryListInterface) => {
  return (
    <CommonListLayout>
      {REPORT_CATEGORIES.map((category) => (
        <ReportCategoryItem
          key={category}
          value={category}
          onValueSelect={onValueSelect}
          $isSelected={selectedValue === category}
        />
      ))}
    </CommonListLayout>
  );
};

export default ReportCategoryList;
