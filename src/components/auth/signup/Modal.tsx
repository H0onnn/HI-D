import React, { useEffect } from 'react';
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
  // 학교 필터링으로 검색어가 포함된 데이터 필터링 추 후 API로 데이터 요청
  const filteredData = (fieldName === 'school' ? DUMMY_SCHOOLS : DUMMY_MAJOR).filter((item) =>
    item.name.includes(searchValue),
  );

  useEffect(() => {
    onFiltered(filteredData.length);
  }, [filteredData, onFiltered]);

  return (
    <>
      <ModalContainer $isVisible={searchValue.trim().length > 0}>
        <>
          <KeywordList
            fieldName={fieldName}
            datas={filteredData}
            keywordSelectHandler={keywordSelectHandler}
            setValue={setValue}
            onBlur={onBlur}
          />
        </>
      </ModalContainer>
    </>
  );
};

export default Modal;

const DUMMY_SCHOOLS = [
  { id: 1, name: '서울대학교' },
  { id: 2, name: '고려대학교' },
  { id: 3, name: '연세대학교' },
  { id: 4, name: '성균관대학교' },
  { id: 5, name: '서강대학교' },
  { id: 6, name: '중앙대학교' },
  { id: 7, name: '숭실대학교' },
];

const DUMMY_MAJOR = [
  { id: 1, name: '컴퓨터공학' },
  { id: 2, name: '전자공학' },
  { id: 3, name: '산업공학' },
  { id: 4, name: '기계공학' },
  { id: 5, name: '화학공학' },
  { id: 6, name: '경영학' },
  { id: 7, name: '의학' },
];

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
