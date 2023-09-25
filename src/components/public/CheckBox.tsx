import React from 'react';
import styled from 'styled-components';

interface CheckBoxInterface {
  text: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  textStyle?: React.CSSProperties;
}

const Checkbox = ({ text, checked, onChange, name, textStyle }: CheckBoxInterface) => {
  return (
    <StyledLabel htmlFor={text}>
      <StyledInput type='checkbox' id={text} name={name} checked={checked} onChange={onChange} />
      <StyledP style={textStyle}>{text}</StyledP>
    </StyledLabel>
  );
};

export default Checkbox;

const StyledInput = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 1.5px solid gainsboro;
  border-radius: 3.5px;
  margin-right: 0.5rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: limegreen;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
`;

const StyledP = styled.p<{ textStyle?: React.CSSProperties }>`
  margin-left: 0.25rem;
  font-size: 14px;
  font-weight: ${({ textStyle }) => textStyle?.fontWeight || 'normal'};
`;
