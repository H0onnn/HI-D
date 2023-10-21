import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import FreePostTagContainer from '../post/FreePostTag';
import { FreePostTag } from '@/types/post';
import { PostingDataInterface } from '@/types/posting';

const FreePostCategoryTag = () => {
  const [currentTag, setCurrentTag] = useState<FreePostTag>(initialTag);

  const { register, setValue } = useFormContext<PostingDataInterface>();

  // 컴포넌트 마운트 후 초기값 'LOVE'로 설정
  setValue('tag', tagToEnglishMapping[initialTag]);

  const tagClickHandler = (e: React.MouseEvent<HTMLElement>) => {
    const clickedTagText = e.currentTarget.textContent as FreePostTag;
    if (currentTag === clickedTagText) return;

    const englishValue = tagToEnglishMapping[clickedTagText];

    setCurrentTag(clickedTagText);
    setValue('tag', englishValue);
  };

  return (
    <Layout>
      <Title>관련 카테고리를 선택해주세요</Title>
      <FreePostTagContainer
        onClick={tagClickHandler}
        currentTag={currentTag}
        $wrap={true}
        $noneMarginStyles={true}
        excludeTags={['전체']}
      />
      <input {...register('tag')} type='hidden' value={tagToEnglishMapping[currentTag]} />
    </Layout>
  );
};

export default FreePostCategoryTag;

const initialTag: FreePostTag = '연애';

const tagToEnglishMapping: { [key in FreePostTag]: string } = {
  전체: 'ALL',
  연애: 'LOVE',
  일상: 'DAILY',
  같이해요: 'TOGETHER',
  맛집: 'RESTAURANT',
  잡담: 'CHITCHAT',
};

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
