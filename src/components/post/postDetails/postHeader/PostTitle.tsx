import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface PostTitleInterface {
  title: string;
}

const PostTitle = ({ title }: PostTitleInterface) => {
  return (
    <TitleLayout>
      <TitleText>{title}</TitleText>
    </TitleLayout>
  );
};

export default PostTitle;

const TitleLayout = styled.div`
  width: 30rem;
  height: 100%;
`;

const TitleText = styled.h1`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: ${colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
