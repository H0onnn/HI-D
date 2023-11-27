import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useFunnel } from '@/hooks/useFunnel';
import useSubmitPost from '@/hooks/useSubmitPost';
import { getPostDetailData } from '@/services/post';
import { PageLayout } from '@/styles/styles';
import PageHeader from '@/components/public/PageHeader';
import PostingSetup from '@/components/posting/PostingSetup';
import GenericForm from '@/components/public/form/GenericForm';
import LoadingContent from '@/components/public/LoadingContent';
import { handleNextClick, handlePrevClick } from '@/services/setupStep';
import { LINK } from '@/constants/links';
import { PostingDataInterface } from '@/types/posting';
import { PostDetailInterface } from '@/types/post';

const steps = ['계열 선택', '게시글 작성'];
const confirmMessage = '게시글 작성을 취소하시겠어요?';

const PostingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { submitPost, editPost } = useSubmitPost();
  const currentPath = location.pathname;
  const currentPostId = currentPath.includes('edit') && Number(currentPath.split('/')[3]);
  const [initialData, setInitialData] = useState<PostDetailInterface | undefined>(undefined);

  useEffect(() => {
    const fetchInitialPost = async () => {
      if (currentPostId) {
        const data = await getPostDetailData(currentPostId);
        setInitialData(data);
      }
    };

    fetchInitialPost();
  }, [currentPostId]);

  const postToEdit = initialData;

  const isHelpPost = currentPath === LINK.POSTING_HELP || postToEdit?.boardType === 'NEED_HELP';
  const isFreePost = currentPath === LINK.POSTING_FREE || postToEdit?.boardType === 'FREE';
  const submitType = isHelpPost ? 'needhelp' : 'free';

  const defaultStep = isHelpPost && !postToEdit ? steps[0] : steps[1];
  const { Funnel, Step, setStep, currentStep } = useFunnel(defaultStep);

  const nextClickHandler = handleNextClick(setStep, steps);
  const prevClickHandler = handlePrevClick(
    setStep,
    steps,
    confirmMessage,
    navigate,
    currentPath,
    isFreePost,
  );

  const submitPostHandler = (data: PostingDataInterface) => {
    if (postToEdit) {
      editPost({ postId: postToEdit.postId, data });
      return;
    }
    submitPost(submitType, data);
  };

  if (!postToEdit && !isHelpPost && !isFreePost) return <LoadingContent />;

  return (
    <>
      <PageHeader title='게시글 작성' onClick={() => prevClickHandler(currentStep)} />
      <PageLayout>
        <GenericForm<PostingDataInterface>
          formOptions={{ mode: 'onChange' }}
          onSubmit={submitPostHandler}
        >
          <PostingSetup
            steps={steps}
            Funnel={Funnel}
            Step={Step}
            nextClickHandler={nextClickHandler}
            isFreePost={isFreePost}
            isHelpPost={isHelpPost}
            postToEdit={postToEdit}
          />
        </GenericForm>
      </PageLayout>
    </>
  );
};

export default PostingPage;
