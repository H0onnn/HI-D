import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

const AnonymousToggle = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <ToggleContainer onClick={() => setIsActive(!isActive)}>
      <ToggleCircle isActive={isActive} />
    </ToggleContainer>
  );
};

export default AnonymousToggle;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleCircle = styled.div<{ isActive: boolean }>`
  width: 5.4rem;
  height: 3.1rem;
  background-color: ${(props) => (props.isActive ? colors.primary : colors.gray4)};
  border-radius: 15px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(props) => (props.isActive ? '25px' : '2px')};
    width: 2.7rem;
    height: 2.7rem;
    background-color: ${colors.white};
    border-radius: 50%;
    transition: left 0.3s;
  }
`;
