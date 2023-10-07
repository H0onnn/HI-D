import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../post/postItem/ProfileBox';
import PostCountBox from '../post/postItem/PostCountBox';
import { Post } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';

const PopularPost = ({
  post: { postId, writer, category, title, viewCount, recommendCount, replyCount },
}: {
  post: Post;
}) => {
  const profileImage = '';
  const navigate = useNavigate();

  return (
    <Layout onClick={() => navigate(`${LINK.POST}/${postId}`)}>
      <div>
        <TagBox>{category}</TagBox>
      </div>
      <Title>{title}</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProfileBox writer={writer} profileImage={profileImage} />
        <PostCountBox
          recommendCount={recommendCount}
          replyCount={replyCount}
          viewCount={viewCount}
        />
      </div>
    </Layout>
  );
};

export default PopularPost;

const Layout = styled.div`
  cursor: pointer;
  margin: 0 2rem;
  width: 33.8rem;
  min-width: 33.8rem;
  height: 17rem;
  padding: 2.4rem 2rem;
  border-radius: 12px;
  background: #7c7c7c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.4rem 0;
  color: #fff;
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
  background: #656565;
  color: #fff;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
