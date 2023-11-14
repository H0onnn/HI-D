import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import LogoIcon from '../../public/images/main_logo.svg';
import AlarmIcon from '../../public/images/alarm.svg';
import { imageStyle } from '@/styles/styles';
import { LINK } from '@/constants/links';

const MainPageHeader = () => {
  const navigate = useNavigate();

  return (
    <PageHeaderLayout>
      <LogoImageWrapper onClick={() => navigate(LINK.MAIN)}>
        <img src={LogoIcon} alt='logo icon' />
      </LogoImageWrapper>
      <AlarmImageWrapper onClick={() => navigate(LINK.NOTIFICATION)}>
        <img src={AlarmIcon} alt='alarm icon' />
      </AlarmImageWrapper>
    </PageHeaderLayout>
  );
};

export default MainPageHeader;

const PageHeaderLayout = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 39rem;
  height: 4.8rem;
  position: fixed;
  top: 0;
  padding: 2rem;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray1};
`;

const LogoImageWrapper = styled.div`
  width: 5.8rem;
  height: 3.6rem;
  ${imageStyle}
`;

const AlarmImageWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  ${imageStyle}
`;
