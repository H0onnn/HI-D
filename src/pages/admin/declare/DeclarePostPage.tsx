import React from 'react';
import PageHeader from '@/components/public/PageHeader';
import { AdminPageLayout } from '@/styles/admin';
import DeclarePost from '@/components/admin/declare/DeclarePost';

const DecalrePostPage = () => {
  return (
    <>
      <PageHeader title='신고 글 상세' />
      <AdminPageLayout>
        <DeclarePost />
      </AdminPageLayout>
    </>
  );
};

export default DecalrePostPage;
