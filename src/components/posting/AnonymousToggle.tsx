import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { PostingDataInterface } from '@/types/posting';

const AnonymousToggle = () => {
  const { watch, setValue } = useFormContext<PostingDataInterface>();
  const isAnonymous = watch('anonymous');

  const toggleHandler = () => {
    setValue('anonymous', !isAnonymous);
  };

  return (
    <ToggleContainer onClick={toggleHandler}>
      <ToggleCircle $isActive={isAnonymous} />
    </ToggleContainer>
  );
};

export default AnonymousToggle;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ToggleCircle = styled.div<{ $isActive: boolean }>`
  width: 5.4rem;
  height: 3.1rem;
  background-color: ${(props) => (props.$isActive ? colors.primary : colors.gray4)};
  border-radius: 15px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: ${(props) => (props.$isActive ? '25px' : '2px')};
    width: 2.7rem;
    height: 2.7rem;
    background-color: ${colors.white};
    border-radius: 50%;
    transition: left 0.3s;
  }
`;
