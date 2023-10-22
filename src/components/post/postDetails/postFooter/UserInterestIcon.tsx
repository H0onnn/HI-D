import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface UserInterestIconInterface {
  icon: string;
  value: number;
  onClick?: () => void;
}

const UserInterestIcon = ({ icon, value, onClick }: UserInterestIconInterface) => {
  return (
    <UserInterestIconLayout onClick={onClick}>
      <IconWrapper>
        <IconImage src={icon} alt='interest_button_icon' />
      </IconWrapper>
      <Value>{value}</Value>
    </UserInterestIconLayout>
  );
};

export default UserInterestIcon;

const UserInterestIconLayout = styled.div`
  height: 3.5rem;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 900px;
  background-color: ${colors.pastel};
`;

const IconWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Value = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
