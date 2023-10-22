import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface PostBodyTextInterface {
  content: string;
}

const PostBodyText = ({ content }: PostBodyTextInterface) => {
  return (
    <PostBodyTextLayout>
      <PostBodyTextContent>{content}</PostBodyTextContent>
    </PostBodyTextLayout>
  );
};

export default PostBodyText;

const PostBodyTextLayout = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
`;

const PostBodyTextContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.gray6};
`;
