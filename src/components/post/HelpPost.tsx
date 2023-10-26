import React from 'react';
import { PostProps } from '../../types/post';
import BoldContent from '../search/BoldContent';
import { formatTime, getContentSnippet } from '../../utils/post';
import PostCountBox from './postItem/PostCountBox';
import PostImagesBoxSmall from './postItem/PostImagesBoxSmall';
import { majorToKoreaMapping } from '@/constants/majorCategory';
import { useLocation, useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import {
  Contents,
  EditButton,
  Footer,
  Header,
  Layout,
  MajorBox,
  TimeBox,
  Title,
} from '@/styles/post';

const HelpPost = ({
  post: {
    postId,
    title,
    content,
    viewCount,
    recommendCount,
    replyCount,
    createAt,
    thumbnailImages,
    majorCategory,
  },
  keyword,
}: PostProps) => {
  const contentSnippet = getContentSnippet(content, keyword);
  const location = useLocation();
  const navigate = useNavigate();
  // TODO: mypage edit button OR bookmark button

  return (
    <Layout onClick={() => navigate(`${LINK.POST}/${postId}`)}>
      <Header>
        <MajorBox>{majorToKoreaMapping[majorCategory || 'undefined']}</MajorBox>
        {location.pathname === '/my' && <EditButton />}
      </Header>
      <Title>{keyword ? <BoldContent keyword={keyword} content={title} /> : title}</Title>
      <TimeBox>{formatTime(createAt)}</TimeBox>
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
export default HelpPost;
