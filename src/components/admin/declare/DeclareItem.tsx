import ProfileBox from '@/components/post/postItem/ProfileBox';
import React from 'react';
// import DetailButton from './DetailButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import { DeclareTabInterface, ReportInterface } from '@/types/admin';

const DecalreItem = ({
  postId,
  replyId = 0,
  content,
  reportCount,
  writer,
  code,
}: ReportInterface & DeclareTabInterface) => {
  const profileBoxSize = 'small';
  const navigate = useNavigate();

  const moveDetailPage = () => {
    if (code === 'post') {
      navigate(`${LINK.ADMIN_DECLARE_POST}/${postId}`);
    } else {
      navigate(`${LINK.ADMIN_DECLARE_REPLY}/${replyId}?postId=${postId}`);
    }
  };

  return (
    <Layout onClick={moveDetailPage}>
      <Header>
        <div>{content}</div>
        <div>총{reportCount}회</div>
      </Header>
      <Footer>
        <ProfileBox writer={writer.nickname} profileImage={writer.imageUrl} size={profileBoxSize} />
        {/* <DetailButton onClick={onClick} /> */}
      </Footer>
    </Layout>
  );
};

export default DecalreItem;

const Layout = styled.div``;
const Header = styled.div``;
const Footer = styled.div``;
