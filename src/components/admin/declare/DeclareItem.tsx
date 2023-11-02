import ProfileBox from '@/components/post/postItem/ProfileBox';
import React from 'react';
// import DetailButton from './DetailButton';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import { DeclareTabInterface, ReportInterface } from '@/types/admin';
import { colors } from '@/constants/colors';

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
      navigate(`${LINK.ADMIN_DECLARE_POST}/${postId}?postContent=${content}`);
    } else {
      navigate(`${LINK.ADMIN_DECLARE_REPLY}/${replyId}?postId=${postId}?replyContent=${content}`);
    }
  };

  return (
    <Layout onClick={moveDetailPage}>
      <Header>
        <Content>{content}</Content>
        <CountBox>총{reportCount}회</CountBox>
      </Header>
      <Footer>
        <ProfileBox writer={writer.nickname} profileImage={writer.imageUrl} size={profileBoxSize} />
        {/* <DetailButton onClick={onClick} /> */}
      </Footer>
    </Layout>
  );
};

export default DecalreItem;

const Layout = styled.div`
  padding: 1.4rem 1.6rem;
  border-radius: 8px;
  background: ${colors.white};
  box-shadow: 0px 4px 16px 0px rgba(100, 100, 100, 0.1);
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 700;
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
const CountBox = styled.div`
  width: 5.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 90rem;
  background: ${colors.pastel};
  font-size: 14px;
  color: ${colors.gray7};
`;
