import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface UserNameAndSchoolInfoInterface {
  userName: string;
  schoolName: string;
}

const UserNameAndSchoolInfo = ({ userName, schoolName }: UserNameAndSchoolInfoInterface) => {
  return (
    <UserNameAndSchoolInfoLayout>
      <UserName>{userName}</UserName>
      <SchoolName>{schoolName}</SchoolName>
    </UserNameAndSchoolInfoLayout>
  );
};

export default UserNameAndSchoolInfo;

const UserNameAndSchoolInfoLayout = styled.div`
  width: 12rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const UserName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SchoolName = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.gray5};
  line-height: 21px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
