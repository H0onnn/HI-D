import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../constants/colors';
import { KeywordSearchInterface, KeywordDataInterface } from '../../../types/types';

interface KeywordItemInterface extends KeywordSearchInterface, KeywordDataInterface {}

const KeywordItem = ({
  fieldName,
  name,
  keywordSelectHandler,
  setValue,
  onBlur,
}: KeywordItemInterface) => {
  return (
    <KeywordItemContainer onClick={() => keywordSelectHandler(fieldName, name, setValue, onBlur)}>
      <KeywordItemText>{name}</KeywordItemText>
    </KeywordItemContainer>
  );
};

export default KeywordItem;

const KeywordItemContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 4.5rem;
  align-items: center;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.paleGray};

  &:hover {
    background-color: ${colors.paleGray};
  }
`;

const KeywordItemText = styled.span`
  font-size: 14px;
  color: ${colors.font};
  margin: 0 1.5rem;
`;
