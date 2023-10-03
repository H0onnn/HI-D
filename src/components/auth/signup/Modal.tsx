import React, { useEffect } from 'react';
import useSchooMajorData from '../../../hooks/useSchoolMajorData';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import KeywordList from './KeywordList';
import { KeywordSearchInterface } from '../../../types/types';

interface ModalInterface extends KeywordSearchInterface {
  searchValue: string;
  onFiltered: (count: number) => void;
}

const Modal = ({
  fieldName,
  searchValue,
  keywordSelectHandler,
  setValue,
  onBlur,
  onFiltered,
}: ModalInterface) => {
  const { datas, isLoading } = useSchooMajorData(fieldName, searchValue);

  useEffect(() => {
    onFiltered(datas.length);
  }, [datas, onFiltered]);

  return (
    <ModalContainer $isVisible={searchValue.trim().length > 0}>
      {isLoading ? (
        <LoadingText>검색 중..</LoadingText>
      ) : datas.length ? (
        <KeywordList
          fieldName={fieldName}
          datas={datas}
          keywordSelectHandler={keywordSelectHandler}
          setValue={setValue}
          onBlur={onBlur}
        />
      ) : (
        <NoDataCommentBox>
          <span>검색어 없음</span>
        </NoDataCommentBox>
      )}
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div<{ $isVisible: boolean }>`
  display: ${(props) => (props.$isVisible ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 145%;
  width: 100%;
  max-width: 35rem;
  max-height: 25rem;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const LoadingText = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.gray};
  padding: 1rem 1.5rem;
  margin: 0;
`;

const NoDataCommentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${colors.gray};
  height: 25rem;
`;
