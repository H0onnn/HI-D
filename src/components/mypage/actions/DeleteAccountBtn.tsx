import React from 'react';
import { Link } from 'react-router-dom';
import { LINK } from '@/constants/links';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

const DeleteAccountBtn = () => {
  return (
    <StyledLink to={LINK.MAIN} style={{ textDecoration: 'none' }}>
      계정 탈퇴
    </StyledLink>
  );
};

export default DeleteAccountBtn;

const StyledLink = styled(Link)`
  margin-top: 1rem;
  height: 100%;
  text-decoration: none;
  color: ${colors.gray6};
  font-size: 12px;
  font-weight: 400;
  border-bottom: 1px solid ${colors.gray3};

  &:visited {
    color: ${colors.gray6};
  }
`;
