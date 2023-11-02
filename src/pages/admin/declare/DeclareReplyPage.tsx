import React from 'react';
import PageHeader from '@/components/public/PageHeader';
import { AdminPageLayout } from '@/styles/admin';
import DeclareReply from '@/components/admin/declare/DeclareReply';

const DecalreReplyPage = () => {
  return (
    <>
      <PageHeader title='신고 댓글 상세' />
      <AdminPageLayout>
        <DeclareReply />
      </AdminPageLayout>
    </>
  );
};

export default DecalreReplyPage;
