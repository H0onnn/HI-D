import React from 'react';
import { PostProps } from '../../types/post';
import BoldContent from '../search/BoldContent';
import { formatTime, getContentSnippet } from '../../utils/post';
import PostCountBox from './postItem/PostCountBox';
import ProfileBox from './postItem/ProfileBox';
import PostImagesBoxSmall from './postItem/PostImagesBoxSmall';
import { LINK } from '@/constants/links';
import { useNavigate } from 'react-router-dom';
import { Contents, Footer, Header, Layout, TimeBox, Title } from '@/styles/post';

const FreePost = ({
  post: {
    postId,
    writer,
    title,
    content,
    viewCount,
    recommendCount,
    replyCount,
    createAt,
    thumbnailImages,
  },
  keyword,
}: PostProps) => {
  const navigate = useNavigate();
  const contentSnippet = getContentSnippet(content, keyword);
  // TODO: mypage edit button OR bookmark button

  return (
    <Layout onClick={() => navigate(`${LINK.POST}/${postId}`)}>
      <Header>
        <ProfileBox writer={writer?.nickname} profileImage={writer?.imageUrl} />
        <TimeBox>{formatTime(createAt)}</TimeBox>
      </Header>
      <Title>{keyword ? <BoldContent keyword={keyword} content={title} /> : title}</Title>
      <Contents>
        {keyword ? <BoldContent keyword={keyword} content={contentSnippet} /> : contentSnippet}
      </Contents>
      <Footer>
        <PostImagesBoxSmall images={thumbnailImages || []} />
        <PostCountBox
          recommendCount={recommendCount}
          replyCount={replyCount}
          viewCount={viewCount}
        />
      </Footer>
    </Layout>
  );
};
export default FreePost;
