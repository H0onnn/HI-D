import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../post/postItem/ProfileBox';
import PostCountBox from '../post/postItem/PostCountBox';
import { Post } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { colors } from '@/constants/colors';

const PopularPost = ({
  post: { postId, writer, writerImage, category, title, viewCount, recommendCount, replyCount },
}: {
  post: Post;
}) => {
  const navigate = useNavigate();
  const darkMode = true;

  return (
    <Layout onClick={() => navigate(`${LINK.POST}/${postId}`)}>
      <div>
        <TagBox>
          {tabList.map((tab) => {
            if (tab.category === category) {
              return tab.name;
            }
          })}
        </TagBox>
      </div>
      <Title>{title}</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProfileBox writer={writer} profileImage={writerImage} darkMode={darkMode} />
        <PostCountBox
          recommendCount={recommendCount}
          replyCount={replyCount}
          viewCount={viewCount}
          darkMode={darkMode}
        />
      </div>
    </Layout>
  );
};

export default PopularPost;

const tabList = [
  { id: 1, name: '도움이 필요해요', category: 'help', link: LINK.POST_HELP },
  { id: 2, name: '자유게시판', category: 'free', link: LINK.POST_FREE },
];

const Layout = styled.div`
  cursor: pointer;
  margin: 0 2rem;
  width: 33.8rem;
  min-width: 33.8rem;
  height: 17rem;
  padding: 2.4rem 2rem;
  border-radius: 12px;
  background: #5061ff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
  &:active {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
`;
const Title = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.4rem 0;
  color: ${colors.white};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const TagBox = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 0.8rem;
  background: ${colors.white};
  color: #5061ff;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
