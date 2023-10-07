import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../post/postItem/ProfileBox';
import { Post } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { formatTimeAgo } from '../../utils/post';

const NewPost = ({ post: { postId, writer, category, title, createAt } }: { post: Post }) => {
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
        <TimeAgoBox>{formatTimeAgo(createAt)}</TimeAgoBox>
      </div>
    </Layout>
  );
};
export default NewPost;

const Layout = styled.div`
  width: 22em;
  min-width: 22rem;
  height: 16rem;
  padding: 2.4rem 2rem;
  border-radius: 1.2rem;
  background: #7c7c7c;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* &:first-child {
    margin: 0 0 0 2rem;
  } */
`;
const Title = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.3rem 0;
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

const TimeAgoBox = styled.div`
  display: flex;
  align-items: center;
  color: #c5c5c5;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
