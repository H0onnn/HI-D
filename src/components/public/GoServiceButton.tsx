import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '@/constants/colors';
import { LINK } from '@/constants/links';
import Button from './Button';

const GoServiceButton = () => {
  return (
    <Button $isFullWidth variant='textOnly'>
      <StyledLink to={LINK.MAIN} style={{ textDecoration: 'none' }}>
        서비스 둘러보기
      </StyledLink>
    </Button>
  );
};

export default GoServiceButton;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.gray4};

  &:visited {
    color: ${colors.gray4};
  }
`;
