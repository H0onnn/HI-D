import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../post/postItem/ProfileBox';
import PostCountBox from '../post/postItem/PostCountBox';
import { PostInterface } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { colors } from '@/constants/colors';
import { tabList } from '@/constants/post';
import { Footer } from '@/styles/post';

const PopularPost = ({
  post: {
    postId,
    writer,
    title,
    viewCount,
    recommendCount,
    replyCount,
    boardType,
    thumbnailImages = [],
  },
}: {
  post: PostInterface;
}) => {
  const navigate = useNavigate();
  const darkMode = true;
  const profileBoxSize = 'small';

  const postClickHandler = () => {
    navigate(`${LINK.POST}/${postId}`);
  };

  return (
    <Layout onClick={postClickHandler} url={thumbnailImages[0]}>
      <div>
        <TagBox>
          {tabList.map((tab) => {
            if (tab.category === boardType) {
              return tab.name;
            }
          })}
        </TagBox>
      </div>
      <Title>{title}</Title>
      <Footer>
        <ProfileBox
          writer={writer?.nickname}
          profileImage={writer?.imageUrl}
          darkMode={darkMode}
          size={profileBoxSize}
        />
        <PostCountBox
          recommendCount={recommendCount}
          replyCount={replyCount}
          viewCount={viewCount}
          darkMode={darkMode}
        />
      </Footer>
    </Layout>
  );
};

export default PopularPost;

const Layout = styled.div<{ url: string }>`
  cursor: pointer;
  margin: 0 2rem;
  width: 33.8rem;
  min-width: 33.8rem;
  height: 17rem;
  padding: 2.4rem 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ url }) =>
    url
      ? `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${url})`
      : colors.primary};
  background-size: cover;
  background-position: center center;
  &:hover,
  &:active {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
  }
`;

const Title = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.4rem 0;
  color: ${colors.white};
  font-size: 16px;
`;

const TagBox = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 0.8rem;
  background: ${colors.white};
  color: ${colors.primary};
  font-size: 12px;
`;
