import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import ARROW_ICON from '@/public/images/ui/arrow_right.svg';
import { formatDate } from '@/utils/calculateDate';

interface MyCommentItemInterface {
  title: string;
  created_at: string;
  content: string;
  postId: number;
}

const MyCommentItem = forwardRef<HTMLDivElement, MyCommentItemInterface>(
  ({ title, created_at, content, postId }, ref) => {
    const navigate = useNavigate();

    const moveToPostDetailHandler = () => {
      navigate(`/post/${postId}`);
    };

    return (
      <Layout ref={ref} onClick={moveToPostDetailHandler}>
        <ContentHeader>
          <Title>{title}</Title>
          <Date>{formatDate(created_at)}</Date>
        </ContentHeader>
        <ContentContainer>
          <Content>{content}</Content>
          <ArrowIcon src={ARROW_ICON} alt='arrow_icon' />
        </ContentContainer>
      </Layout>
    );
  },
);

MyCommentItem.displayName = 'MyCommentItem';

export default MyCommentItem;

const Layout = styled.div`
  width: 100%;
  height: 8.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1.6rem;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;
`;

const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Date = styled.p`
  font-size: 14px;
  color: ${colors.gray6};
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 0.5rem;
`;

const Content = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${colors.gray6};
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ArrowIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;

  cursor: pointer;
`;
