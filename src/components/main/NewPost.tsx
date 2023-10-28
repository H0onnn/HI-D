import React from 'react';
import styled from 'styled-components';
import ProfileBox from '../post/postItem/ProfileBox';
import { PostInterface } from '../../types/post';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import { formatTimeAgo } from '../../utils/post';
import { colors } from '@/constants/colors';
import { majorToKoreaMapping } from '@/constants/majorCategory';
import { Footer } from '@/styles/post';

const NewPost = ({
  post: { postId, writer, title, createAt, majorCategory = 'undefined' },
}: {
  post: PostInterface;
}) => {
  const navigate = useNavigate();
  return (
    <Layout onClick={() => navigate(`${LINK.POST}/${postId}`)}>
      <div>
        <TagBox>{majorToKoreaMapping[majorCategory]}</TagBox>
      </div>
      <Title>{title}</Title>
      <Footer>
        <ProfileBox writer={writer?.nickname} profileImage={writer?.imageUrl} size='small' />
        <TimeAgoBox>{formatTimeAgo(createAt)}</TimeAgoBox>
      </Footer>
    </Layout>
  );
};
export default NewPost;

const Layout = styled.div`
  cursor: pointer;
  width: 22em;
  min-width: 22rem;
  height: 16rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1.2rem;
  background: ${colors.white};
  box-shadow: 0px 4px 16px 0px rgba(100, 100, 100, 0.1);
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
  padding: 0.6rem 0;
  color: #252424;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TagBox = styled.div`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border-radius: 0.8rem;
  background: ${colors.primary};
  color: ${colors.white};
  font-size: 12px;
`;

const TimeAgoBox = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.secondary};
  font-size: 12px;
`;
