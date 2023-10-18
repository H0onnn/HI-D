import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import FreePostTagContainer from '../post/FreePostTag';
import { FreePostTag } from '@/types/post';
import { PostingDataInterface } from '@/types/posting';

const FreePostCategoryTag = () => {
  const [currentTag, setCurrentTag] = useState<FreePostTag>('전체');

  const { register, setValue } = useFormContext<PostingDataInterface>();

  const tagClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const clickedTag = e.currentTarget.textContent as FreePostTag;
    if (currentTag === e.currentTarget.textContent) return;

    setCurrentTag(clickedTag);

    setValue('tag', clickedTag);
  };

  return (
    <Layout>
      <Title>관련 카테고리를 선택해주세요</Title>
      <FreePostTagContainer
        onClick={tagClickHandler}
        currentTag={currentTag}
        $wrap={true}
        $noneMarginStyles={true}
      />
      <input {...register('tag')} type='hidden' value={currentTag} />
    </Layout>
  );
};

export default FreePostCategoryTag;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 10rem;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  line-height: 30px;
  margin-left: 0.8rem;
`;
