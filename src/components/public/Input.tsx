import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Button from './Button';
import CheckIcon from '@/public/images/input/input_check.svg';
import WarningIcon from '@/public/images/input/error_warning.svg';
import SearchIcon from '@/public/images/input/search.png';
interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  image?: string | React.ReactNode;
  button?: boolean;
  buttonText?: string;
  status?: 'default' | 'success' | 'error' | 'search';
  errorMessage?: string;
  onButtonClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputInterface>(
  (
    { image, button, status = 'default', errorMessage, buttonText, onButtonClick, ...props },
    ref,
  ) => {
    const renderIcon = () => {
      if (button) return null;

      switch (status) {
        case 'error':
          return <img src={WarningIcon} alt='warning_icon' />;
        case 'success':
          return <img src={CheckIcon} alt='check_icon' />;
        case 'search':
          return (
            <img
              src={SearchIcon}
              alt='search icon'
              style={{ width: '20px', height: '20px', marginTop: '0.3rem' }}
            />
          );
        default:
          return typeof image === 'string' ? <img src={image} alt='input icon' /> : image;
      }
    };

    return (
      <>
        <InputLayout status={status}>
          <CustomInput ref={ref} {...props} autoComplete='off' />
          {renderIcon()}
          {button && (
            <VerifiedButton
              variant='primary'
              disabled={status !== 'success'}
              onClick={onButtonClick}
              type='button'
            >
              {buttonText}
            </VerifiedButton>
          )}
        </InputLayout>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </>
    );
  },
);

Input.displayName = 'Input';

export default Input;

const InputLayout = styled.div<{ status: 'default' | 'success' | 'error' | 'search' }>`
  position: relative;
  width: 100%;
  height: 4.8rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  background: ${({ status }) =>
    status === 'success' ? colors.pastel : status === 'error' ? colors.inputError : colors.gray1};
  display: flex;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0 0 0 1px ${colors.secondary};
  }
`;

const CustomInput = styled.input<{ isFocused?: boolean }>`
  width: 100%;
  font-size: 14px;
  line-height: 2.1rem;
  color: ${colors.black};
  border: none;
  outline: none;
  background: none;

  &::placeholder {
    color: ${colors.gray5};
  }
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: ${colors.error};
  position: absolute;
  bottom: -2rem;
`;

const VerifiedButton = styled(Button)`
  color: ${colors.white};
  font-size: 12px;
  border-radius: 900px;
  width: 10.3rem;
  height: 2.6rem;
  position: absolute;
  right: 1.6rem;
  padding: 0;
`;
