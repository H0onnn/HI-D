import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFunnel } from '@/hooks/useFunnel';
import useSubmitPost from '@/hooks/useSubmitPost';
import { PageLayout } from '@/styles/styles';
import PageHeader from '@/components/public/PageHeader';
import PostingForm from '@/components/posting/PostingForm';
import PostingSetup from '@/components/posting/PostingSetup';
import { handleNextClick, handlePrevClick } from '@/services/posting';
import { LINK } from '@/constants/links';
import { PostingDataInterface } from '@/types/posting';

const PostingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { submitPost, editPost } = useSubmitPost();

  const currentPath = location.pathname;
  const postToEdit = location.state?.post;

  const isHelpPost = currentPath === LINK.POSTING_HELP || postToEdit?.boardType === 'NEED_HELP';
  const isFreePost = currentPath === LINK.POSTING_FREE || postToEdit?.boardType === 'FREE';
  const submitType = isHelpPost ? 'needhelp' : 'free';

  const steps = ['계열 선택', '게시글 작성'];
  const defaultStep = isHelpPost && !postToEdit ? steps[0] : steps[1];

  const { Funnel, Step, setStep, currentStep } = useFunnel(defaultStep);

  const nextClickHandler = handleNextClick(setStep, steps);
  const prevClickHandler = handlePrevClick(setStep, steps, navigate, currentPath);

  const submitPostHandler = (data: PostingDataInterface) => {
    if (postToEdit) {
      editPost({ postId: postToEdit.postId, data });
      return;
    }
    submitPost(submitType, data);
  };

  return (
    <>
      <PageHeader title='게시글 작성' onClick={() => prevClickHandler(currentStep)} />
      <PageLayout>
        <PostingForm onSubmit={submitPostHandler}>
          <PostingSetup
            steps={steps}
            Funnel={Funnel}
            Step={Step}
            nextClickHandler={nextClickHandler}
            isFreePost={isFreePost}
            isHelpPost={isHelpPost}
            postToEdit={postToEdit}
          />
        </PostingForm>
      </PageLayout>
    </>
  );
};

export default PostingPage;
