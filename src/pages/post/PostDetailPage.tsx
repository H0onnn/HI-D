import React from 'react';
import usePostActionState from '@/hooks/useActionState';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';
import usePostDetailData from '@/hooks/usePostDetailData';
import { useParams } from 'react-router-dom';
import { PageLayout } from '@/styles/styles';
import PageHeader from '@/components/public/PageHeader';
import PostAuthorInfo from '@/components/post/postDetails/author/PostAuthorInfo';
import PostHeader from '@/components/post/postDetails/postHeader/PostHeader';
import PostBodyText from '@/components/post/postDetails/postContents/PostBodyText';
import ImageSlider from '@/components/post/postDetails/postContents/ImageSlider';
import UserInterest from '@/components/post/postDetails/postFooter/UserInterest';
import CommentList from '@/components/comment/listing/CommentList';
import SlideUpModal from '@/components/public/SlideUpModal';
import SetupReport from '@/components/post/postDetails/postHeader/actions/report/SetupReport';

const PostDetailPage = () => {
  const { id: postIdStr } = useParams<{ id: string }>();
  const postId = Number(postIdStr);
  const { postData } = usePostDetailData(postId);
  const postStates = usePostActionState();
  const postActionHandlers = usePostActionHandlers();
  const { isReported, toggleReport } = postStates;

  if (!postData) return null;

  return (
    <>
      <PageHeader title='게시글' />
      <PageLayout style={{ gap: '1rem' }}>
        <PostAuthorInfo
          profileImageSrc={postData.writer.imageUrl}
          userName={postData.writer.nickname}
          schoolName={postData.writer.school}
          writerMajor={postData.writer.major}
        />
        <PostHeader
          title={postData.title}
          postId={postData.postId}
          postData={postData}
          isBookmarked={postData.isBookmarked}
          postStates={postStates}
          postActionHandlers={postActionHandlers}
        />
        <PostBodyText content={postData.content} />
        {postData.images && <ImageSlider imageUrls={postData.images} />}
        <UserInterest
          postId={postData.postId}
          likeCount={postData.recommendCount}
          commentCount={postData.replyCount}
          viewCount={postData.viewCount}
          isRecommended={postData.isRecommended}
          postActionHandlers={postActionHandlers}
        />
        <CommentList postId={postId} />
        {isReported && (
          <SlideUpModal setModalState={toggleReport}>
            <SetupReport postId={postData.postId} />
          </SlideUpModal>
        )}
      </PageLayout>
    </>
  );
};

export default PostDetailPage;
