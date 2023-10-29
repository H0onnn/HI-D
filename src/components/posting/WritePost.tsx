import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import Button from '../public/Button';
import { ButtonContainer } from '@/styles/styles';
import AnonymousToggle from './AnonymousToggle';
import EditMajorDropBox from './EditMajorDropBox';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import AddImages from './AddImages';
import FreePostCategoryTag from './FreePostCategoryTag';
import POST_ALERT from '@/public/images/posting/posting_alert.svg';
import { PostDetailInterface } from '@/types/post';
interface WritePostInterface {
  major: string | null;
  isHelpPost: boolean;
  isFreePost: boolean;
  postToEdit?: PostDetailInterface;
}

const WritePost = ({ major, isHelpPost, isFreePost, postToEdit }: WritePostInterface) => {
  return (
    <>
      <TitleContainer>
        <MainTitle>게시글을 작성해주세요</MainTitle>
        <AnonymuseContainer>
          <AnonymousText>익명</AnonymousText>
          <AnonymousToggle initialAnonymous={postToEdit?.isAnonymous} />
        </AnonymuseContainer>
      </TitleContainer>
      {isHelpPost && <EditMajorDropBox major={major} />}
      <ContentsContainer>
        <PostTitle initialTitle={postToEdit?.title} />
        <PostContent initialContent={postToEdit?.content} />
        <AddImages initialImages={postToEdit?.images} />
      </ContentsContainer>
      {isFreePost && <FreePostCategoryTag />}
      <PostAlertWrapper>
        <PostAlertImg src={POST_ALERT} alt='post_alert' />
      </PostAlertWrapper>
      <ButtonContainer style={{ bottom: '2rem' }}>
        <Button $isFullWidth>등록하기</Button>
      </ButtonContainer>
    </>
  );
};

export default WritePost;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 1.5rem;
`;

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${colors.black};
  line-height: 30px;
  margin-left: 0.8rem;
`;

const AnonymuseContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

const AnonymousText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.gray5};
`;

const ContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 4rem;
`;

const PostAlertWrapper = styled.div`
  width: 100%;
  height: 17.2rem;
  overflow: hidden;
`;

const PostAlertImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
