import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import LIKE_ICON from '@/public/images/ui/like_fill.svg';
import ActionButtonContainer from '../actionButton/ActionButtonContainer';

interface CommentItemInterface {
  writer_image: string;
  writer_name: string;
  content: string;
  created_at: string;
  comment_like: number;
}

const CommentItem = ({
  writer_image,
  writer_name,
  content,
  created_at,
  comment_like,
}: CommentItemInterface) => {
  return (
    <>
      <CommentWriterContainer>
        <CommentWriterInfo>
          <CommentWriterImg src={writer_image} alt='comment_writer_img' />
          <CommentWriterName>{writer_name}</CommentWriterName>
          <CommentCreatedAt>{created_at}</CommentCreatedAt>
        </CommentWriterInfo>
        <ActionButtonContainer />
      </CommentWriterContainer>
      <CommentContent>{content}</CommentContent>
      <CommentLikeContainer>
        <CommentLikeImg src={LIKE_ICON} />
        <CommentLikeCount>{comment_like}</CommentLikeCount>
      </CommentLikeContainer>
    </>
  );
};

export default CommentItem;

const CommentWriterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CommentWriterInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const CommentWriterImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const CommentWriterName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
  line-height: 21px;
`;

const CommentContent = styled.p`
  font-size: 14px;
  color: ${colors.black};
  line-height: 21px;
`;

const CommentCreatedAt = styled.p`
  font-size: 12px;
  color: ${colors.gray3};
  line-height: 18px;
`;

const CommentLikeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const CommentLikeImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: cover;
`;

const CommentLikeCount = styled.p`
  font-size: 12px;
  color: ${colors.primary};
  line-height: 18px;
`;
