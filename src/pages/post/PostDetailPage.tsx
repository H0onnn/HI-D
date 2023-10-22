import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageLayout } from '@/styles/styles';
import PageHeader from '@/components/public/PageHeader';
import PostAuthorInfo from '@/components/post/postDetails/author/PostAuthorInfo';
import PostHeader from '@/components/post/postDetails/postHeader/PostHeader';
import PostBodyText from '@/components/post/postDetails/postContents/PostBodyText';
import ImageSlider from '@/components/post/postDetails/postContents/ImageSlider';
import UserInterest from '@/components/post/postDetails/postFooter/UserInterest';

const PostDetailPage = () => {
  const location = useLocation();
  const postData = location.state;

  const { writer, title, content, images, viewCount, recommendCount, replyCount } = postData;

  return (
    <>
      <PageHeader title='게시글' />
      <PageLayout style={{ gap: '1rem' }}>
        <PostAuthorInfo
          profileImageSrc={writer.imageUrl}
          userName={writer.nickname}
          schoolName='서울대학교'
        />
        <PostHeader title={title} />
        <PostBodyText content={content} />
        <ImageSlider imageUrls={images} />
        <UserInterest likeCount={recommendCount} commentCount={replyCount} viewCount={viewCount} />
      </PageLayout>
    </>
  );
};

export default PostDetailPage;
