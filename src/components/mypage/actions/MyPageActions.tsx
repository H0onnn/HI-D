import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
// import { LINK } from '@/constants/links';
import SCHOOL_ICON from '@/public/images/ui/school.svg';
import PASSWORD_ICON from '@/public/images/ui/password.svg';
import CS_CENTER_ICON from '@/public/images/ui/cs_center.svg';
import ARROW_ICON from '@/public/images/ui/arrow_pastel.svg';

const MyPageActions = () => {
  const actions = [
    {
      title: '학교정보 변경',
      icon: SCHOOL_ICON,
      alt: 'edit_school',
      // link: '/mypage/school',
    },
    {
      title: '비밀번호 변경',
      icon: PASSWORD_ICON,
      alt: 'edit_password',
      // link: '/mypage/password',
    },
    {
      title: '고객센터',
      icon: CS_CENTER_ICON,
      alt: 'cs_center',
      // link: '/mypage/cs',
    },
  ];

  return (
    <Layout>
      {actions.map((action, index) => {
        return (
          <ActionWrapper key={index}>
            <TitleContainer>
              <ActionIcon src={action.icon} alt={action.alt} />
              <ActionTitle>{action.title}</ActionTitle>
            </TitleContainer>
            <ActionIcon src={ARROW_ICON} alt='arrow' />
          </ActionWrapper>
        );
      })}
    </Layout>
  );
};

export default MyPageActions;

const Layout = styled.div`
  width: 100%;
  height: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.pastel};
`;

const ActionWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.white};

  &:last-child {
    border-bottom: none;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ActionIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
`;

const ActionTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.black};
`;
