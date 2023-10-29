import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { postContentValidation } from '@/utils/posting/postValidationRules';
import { PostingDataInterface } from '@/types/posting';
import { PostDetailInterface } from '@/types/post';

interface PostContentInterface {
  initialContent?: PostDetailInterface['content'];
}

const PostContent = ({ initialContent }: PostContentInterface) => {
  const { register } = useFormContext<PostingDataInterface>();

  return (
    <ContentField
      {...register('content', postContentValidation)}
      placeholder='고민거리나 질문 내용을 입력해주세요.'
      maxLength={postContentValidation.maxLength.value}
      defaultValue={initialContent}
    />
  );
};

export default PostContent;

const ContentField = styled.textarea`
  width: 100%;
  height: 33rem;
  border-radius: 8px;
  padding: 1rem 1.6rem;
  font-size: 14px;
  font-family: 'SUIT';
  line-height: 2.1rem;
  color: ${colors.black};
  background-color: ${colors.gray1};
  border: none;
  resize: none;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 1px ${colors.secondary};
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.secondary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${colors.gray1};
    border-radius: 10px;
  }

  &::placeholder {
    color: ${colors.gray5};
  }
`;
