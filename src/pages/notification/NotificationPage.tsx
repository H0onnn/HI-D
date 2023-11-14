import React, { useState } from 'react';
import styled from 'styled-components';
import PageHeader from '@/components/public/PageHeader';
import NotificationList from '@/components/notification/NotificationList';
import { PageLayout } from '@/styles/styles';
import { colors } from '@/constants/colors';

const NotificationPage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  return (
    <>
      <PageHeader title='알림' isGoBack />
      <PageLayout>
        <ButtonContainer>
          <EditButton onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? '완료' : '편집'}
          </EditButton>
          {isEditing && <EditButton style={{ width: '6rem' }}>전체삭제</EditButton>}
        </ButtonContainer>
        <NotificationList isEditing={isEditing} setIsEditing={setIsEditing} />
      </PageLayout>
    </>
  );
};

export default NotificationPage;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const EditButton = styled.button`
  width: 3rem;
  height: 2.5rem;
  color: ${colors.gray6};
  font-size: 16px;
  font-weight: bold;
  line-height: 14px;
  background-color: transparent;
  border: none;
  outline: none;
`;
