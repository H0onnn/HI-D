import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../post/postItem/ProfileBox';
import { Post } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { formatTimeAgo } from '../../utils/post';

const NewPost = ({ post: { postId, writer, writerImage, title, createAt } }: { post: Post }) => {
  const navigate = useNavigate();
  return (
    <Layout onClick={() => navigate(`${LINK.POST}/${postId}`)}>
      <div>
        <TagBox>NEW</TagBox>
      </div>
      <Title>{title}</Title>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ProfileBox writer={writer} profileImage={writerImage} />
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
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.2rem;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(100, 100, 100, 0.1);
  /* &:first-child {
    margin: 0 0 0 2rem;
  } */
`;
const Title = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.3rem 0;
  color: #252424;
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
  background: #5061ff;
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
  color: #a5adff;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
