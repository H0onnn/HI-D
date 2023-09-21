import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Button from './Button';

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  image?: string;
  button?: boolean;
  children?: React.ReactNode;
}

const Input = ({ image, button, children, ...props }: InputInterface) => {
  return (
    <InputLayout>
      <CustomInput {...props} />
      {image && <img src={image} alt='input icon' />}
      {button && (
        <Button variant='textOnly' style={{ color: colors.font }}>
          {children}
        </Button>
      )}
    </InputLayout>
  );
};

export default Input;

const InputLayout = styled.div`
  position: relative;
  width: 100%;
  height: 4.8rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  background: ${colors.paleGray};
  display: flex;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0 0 0 2px ${colors.primary};
  }
`;

const CustomInput = styled.input<{ isFocused?: boolean }>`
  width: 100%;
  font-size: 14px;
  line-height: 2.1rem;
  color: ${colors.font};
  border: none;
  outline: none;
  background: none;

  &::placeholder {
    color: ${colors.inputFont};
  }
`;
