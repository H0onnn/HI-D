import React from 'react';
import styled from 'styled-components';
import { PostProps } from '../../types/post';
import BoldContent from '../search/BoldContent';
import { formatTime, getContentSnippet } from '../../utils/post';
import PostCountBox from './postItem/PostCountBox';
import ProfileBox from './postItem/ProfileBox';
import PostImagesBoxMedium from './postItem/PostImagesBoxMedium';
import PostImagesBoxSmall from './postItem/PostImagesBoxSmall';

const FreePost = ({
  post: {
    writer,
    writerImage,
    title,
    content,
    viewCount,
    images,
    recommendCount,
    replyCount,
    createAt,
  },
  keyword,
  imageSize = 'small',
  onClick,
}: PostProps) => {
  const contentSnippet = getContentSnippet(content, keyword);

  const layoutByImageSize = (imageSize: PostProps['imageSize']) => {
    switch (imageSize) {
      case 'small':
        return (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <PostImagesBoxSmall images={images} />
            <PostCountBox
              recommendCount={recommendCount}
              replyCount={replyCount}
              viewCount={viewCount}
              DarkMode={false}
            />
          </div>
        );
      case 'medium':
        return (
          <>
            <PostImagesBoxMedium images={images} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div></div>
              <PostCountBox
                recommendCount={recommendCount}
                replyCount={replyCount}
                viewCount={viewCount}
                DarkMode={false}
              />
            </div>
          </>
        );
      default:
        return;
    }
  };

  return (
    <Layout onClick={onClick}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          borderBottom: '1px solid #EDEDED',
        }}
      >
        <ProfileBox writer={writer} profileImage={writerImage} size='medium' />
        <TimeBox>{formatTime(createAt)}</TimeBox>
      </div>
      <Title>{keyword ? <BoldContent keyword={keyword} content={title} /> : title}</Title>
      <Contents>
        {keyword ? <BoldContent keyword={keyword} content={contentSnippet} /> : contentSnippet}
      </Contents>
      {layoutByImageSize(imageSize)}
    </Layout>
  );
};
export default FreePost;

const Layout = styled.div`
  cursor: pointer;
  width: 100%;
  /* width: 35rem; */
  /* height: 12.2rem; */
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 0.8rem;
  background: #fff;
`;
const Title = styled.div`
  color: #606060;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 2rem;
`;
const TimeBox = styled.div`
  display: flex;
  align-items: center;
  color: #606060;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Contents = styled.div`
  color: #606060;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
