import React from 'react';
import styled from 'styled-components';
import { Post } from '../../types/post';
import BoldContent from '../search/BoldContent';
import { formatTime, getContentSnippet } from '../../utils/post';
import PostCountBox from './PostCountBox';
import PostImagesBox from './PostImagesBox';
import ProfileBox from './ProfileBox';

type Props = {
  post: Post;
  keyword?: string;
  imageSize?: 'small' | 'medium';
  onClick?: () => void;
};
const FreePost = ({
  post: { writer, title, content, viewCount, images, recommendCount, replyCount, createAt },
  keyword,
  imageSize = 'small',
  onClick,
}: Props) => {
  const contentSnippet = getContentSnippet(content, keyword);
  const profileImage = '';

  const layoutByImageSize = (imageSize: Props['imageSize']) => {
    if (imageSize === 'small') {
      return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <PostImagesBox images={images} size={imageSize} />
          <PostCountBox
            recommendCount={recommendCount}
            replyCount={replyCount}
            viewCount={viewCount}
            DarkMode={false}
          />
        </div>
      );
    } else {
      return (
        <>
          <PostImagesBox images={images} size={imageSize} />
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
        <ProfileBox writer={writer} profileImage={profileImage} size='medium' />
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
  width: 35rem;
  /* width: 100%; */
  /* height: 12.2rem; */
  padding: 1.2rem 1.6rem;
  border-radius: 0.8rem;
  background: #fff;
  gap: 0.4rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  color: #606060;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
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
