import React, { useState } from 'react';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import ReportForm from './form/ReportForm';
import ReportCategory from './category/ReportCategory';
import ReportContent from './content/ReportContent';
import { SetupPageLayout } from '@/styles/styles';
import Button from '@/components/public/Button';

interface SetupReportInterface {
  postId: number;
}

const SetupReport = ({ postId }: SetupReportInterface) => {
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const { reportPost } = usePostActionHandlers();

  return (
    <ReportForm onSubmit={(data) => reportPost(postId, data)}>
      <SetupPageLayout style={{ gap: '2rem' }}>
        <ReportCategory currentValue={currentValue} setCurrentValue={setCurrentValue} />
        <ReportContent />
      </SetupPageLayout>
      <Button
        $isFullWidth
        style={{
          marginTop: '-1rem',
        }}
      >
        신고하기
      </Button>
    </ReportForm>
  );
};

export default SetupReport;
