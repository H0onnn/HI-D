import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import Button from './Button';
import CheckIcon from '../public/UI/CheckIcon';
import WarningIcon from '../public/UI/WarningIcon';
import SearchIcon from '../../public/images/input/search.png';
interface InputInterface extends React.InputHTMLAttributes<HTMLInputElement> {
  image?: string | React.ReactNode;
  button?: boolean;
  children?: React.ReactNode;
  status?: 'default' | 'success' | 'error' | 'search';
  errorMessage?: string;
  isVerified?: boolean;
}

const colorMap = {
  default: colors.primary,
  success: colors.success,
  error: colors.error,
  search: colors.paleGray,
};

const Input = forwardRef<HTMLInputElement, InputInterface>(
  ({ image, button, children, status = 'default', errorMessage, isVerified, ...props }, ref) => {
    const renderIcon = () => {
      if (button) return null;

      switch (status) {
        case 'error':
          return <WarningIcon color={colors.error} />;
        case 'success':
          return <CheckIcon color={colors.success} />;
        case 'search':
          return <img src={SearchIcon} alt='search icon' />;
        default:
          return typeof image === 'string' ? <img src={image} alt='input icon' /> : image;
      }
    };

    return (
      <>
        <InputLayout status={status}>
          <CustomInput ref={ref} {...props} />
          {renderIcon()}
          {button && (
            <VerifiedButton
              variant='primary'
              isSuccess={status === 'success'}
              disabled={status !== 'success'}
            >
              {isVerified ? '인증 완료' : children || '인증 메일 보내기'}
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

const ErrorText = styled.p`
  font-size: 12px;
  color: ${colors.error};
  position: absolute;
  bottom: -2rem;
`;

const VerifiedButton = styled(Button)<{ isSuccess: boolean }>`
  color: ${colors.inputFont};
  font-size: 12px;
  border-radius: 900px;
  width: 10.3rem;
  height: 2.6rem;
  position: absolute;
  right: 1.6rem;
  padding: 0;
`;
