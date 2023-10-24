import React from 'react';
import usePostActions from '@/hooks/usePostActions';
import useComments from '@/hooks/useComments';
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

const PostDetailPage = () => {
  const { id: postIdStr } = useParams<{ id: string }>();
  const postId = Number(postIdStr);
  const { postData } = usePostDetailData(postId);
  const postActions = usePostActions();
  const { isCommented } = postActions;
  const { comments } = useComments(postId, isCommented);

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
        <PostHeader title={postData.title} />
        <PostBodyText content={postData.content} />
        <ImageSlider imageUrls={postData.images} />
        <UserInterest
          likeCount={postData.recommendCount}
          commentCount={postData.replyCount}
          viewCount={postData.viewCount}
          postActions={postActions}
        />
        {isCommented && <CommentList commentList={comments} postId={postId} />}
      </PageLayout>
    </>
  );
};

export default PostDetailPage;
