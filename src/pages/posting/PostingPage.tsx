import React from 'react';
import { useFunnel } from '@/hooks/useFunnel';
import { PageLayout } from '@/styles/styles';
import PageHeader from '@/components/public/PageHeader';
import PostingForm from '@/components/posting/PostingForm';
import PostingSetup from '@/components/posting/PostingSetup';

const PostingPage = () => {
  const steps = ['계열 선택', '게시글 작성'];

  const { Funnel, Step } = useFunnel(steps[0]);

  return (
    <>
      <PageHeader title='게시글 작성' onClick={() => {}} />
      <PageLayout>
        <PostingForm onSubmit={() => {}}>
          <PostingSetup steps={steps} Funnel={Funnel} Step={Step} />
        </PostingForm>
      </PageLayout>
    </>
  );
};

export default PostingPage;
