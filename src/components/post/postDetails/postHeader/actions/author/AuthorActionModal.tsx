import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface AuthorActionModalInterface {
  children: React.ReactNode;
}

const AuthorActionModal = ({ children }: AuthorActionModalInterface) => {
  return <ModalLayout>{children}</ModalLayout>;
};

export default AuthorActionModal;

const ModalLayout = styled.div`
  position: absolute;
  width: 12rem;
  height: 9.5rem;
  border-radius: 8px;
  z-index: 1;
  top: 3.5rem;
  right: 0.5rem;
  background-color: ${colors.white};
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.gray3};
  padding: 1rem 1.6rem 1rem 1.6rem;
`;
