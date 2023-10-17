import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface EditMajorModalInterface {
  children: React.ReactNode;
}

const EditMajorModal = ({ children }: EditMajorModalInterface) => {
  return <ModalLayout>{children}</ModalLayout>;
};

export default EditMajorModal;

const ModalLayout = styled.div`
  width: 20rem;
  height: 29rem;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid ${colors.gray2};
  padding: 1rem 1.6rem;
  position: absolute;
  top: 2.5rem;
  left: -2rem;
  display: flex;
  align-items: center;
`;
