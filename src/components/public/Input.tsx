import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Button from './Button';

interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  image?: string | React.ReactNode;
  button?: boolean;
  children?: React.ReactNode;
  status?: 'default' | 'success' | 'error';
}

const colorMap = {
  default: colors.primary,
  success: colors.success,
  error: colors.error,
};

const Input = forwardRef<HTMLInputElement, InputInterface>(
  ({ image, button, children, status = 'default', ...props }, ref) => {
    return (
      <InputLayout status={status}>
        <CustomInput ref={ref} {...props} />
        {typeof image === 'string' ? ( // 문자열일 때는 이미지로 처리
          <img src={image} alt='input icon' />
        ) : (
          image // 컴포넌트일 때는 그대로 렌더링
        )}
        {button && (
          <Button variant='textOnly' style={{ color: colors.font }}>
            {children}
          </Button>
        )}
      </InputLayout>
    );
  },
);

Input.displayName = 'Input';

export default Input;

const InputLayout = styled.div<{ status: 'default' | 'success' | 'error' }>`
  position: relative;
  width: 100%;
  height: 4.8rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  background: ${colors.paleGray};
  display: flex;
  justify-content: space-between;

  box-shadow: ${({ status }) => (status !== 'default' ? `0 0 0 2px ${colorMap[status]}` : 'none')};

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ status }) => colorMap[status]};
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
