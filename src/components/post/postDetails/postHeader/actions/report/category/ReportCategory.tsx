import React from 'react';
import ReportCategoryList from './ReportCategoryList';
import { Title, Layout } from '@/styles/reportForm';

interface ReportCategoryInterface {
  currentValue: string | null;
  setCurrentValue: React.Dispatch<React.SetStateAction<string | null>>;
}

const ReportCategory = ({ currentValue, setCurrentValue }: ReportCategoryInterface) => {
  return (
    <Layout>
      <Title>신고 유형을 선택해주세요</Title>
      <ReportCategoryList onValueSelect={setCurrentValue} selectedValue={currentValue} />
    </Layout>
  );
};

export default ReportCategory;
