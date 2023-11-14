import React, { useState } from 'react';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import useCommentActionHandler from '@/hooks/useCommentActionHandler';
import GenericForm from '@/components/public/form/GenericForm';
import ReportCategory from './category/ReportCategory';
import ReportContent from './content/ReportContent';
import { SetupPageLayout } from '@/styles/styles';
import Button from '@/components/public/Button';
import { ReportDataInterface } from '@/types/report';
interface SetupReportInterface {
  postId?: number;
  replyId?: number;
  type: 'POST' | 'COMMENT';
}

const SetupReport = ({ postId, replyId, type }: SetupReportInterface) => {
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const { reportPost } = usePostActionHandlers();
  const { reportComment } = useCommentActionHandler();

  const submitHandler = (data: ReportDataInterface) => {
    if (type === 'POST' && postId) {
      reportPost(postId, data);
    } else if (type === 'COMMENT' && postId && replyId) {
      reportComment(replyId, data);
    }
  };

  return (
    <GenericForm<ReportDataInterface>
      formOptions={{
        mode: 'onSubmit',
        shouldUnregister: false,
      }}
      onSubmit={submitHandler}
    >
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
    </GenericForm>
  );
};

export default SetupReport;
