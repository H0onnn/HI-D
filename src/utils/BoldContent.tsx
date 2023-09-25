import React from 'react';
import styled from 'styled-components';

type Props = {
  keyword: string;
  content: string;
};
export default function BoldContent({ keyword, content }: Props) {
  const textArray = content.split(keyword);
  return (
    <div>
      {textArray.map((text, index) => (
        <span key={index}>
          {text}
          {index !== textArray.length - 1 && <BoldText>{keyword}</BoldText>}
        </span>
      ))}
    </div>
  );
}

const BoldText = styled.span`
  font-weight: bold;
`;
