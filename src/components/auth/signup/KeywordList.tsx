import React from 'react';
import KeywordItem from './KeywordItem';
import styled from 'styled-components';
import { KeywordSearchInterface } from '../../../types/types';

interface KeywordListInterface extends KeywordSearchInterface {
  datas: string[];
}

const KeywordList = ({
  fieldName,
  datas,
  keywordSelectHandler,
  setValue,
  onBlur,
}: KeywordListInterface) => {
  return (
    <KeywordListContainer>
      {datas.map((data, index) => (
        <KeywordItem
          key={index}
          name={data}
          fieldName={fieldName}
          keywordSelectHandler={keywordSelectHandler}
          setValue={setValue}
          onBlur={onBlur}
        />
      ))}
    </KeywordListContainer>
  );
};

export default KeywordList;

const KeywordListContainer = styled.div`
  flex: 1;
`;
