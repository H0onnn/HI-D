import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import LogoIcon from '../../public/images/main_logo.svg';
import AlarmIcon from '../../public/images/alarm.svg';

const MainPageHeader = () => {
  return (
    <PageHeaderLayout>
      <LogoImageWrpper>
        <img src={LogoIcon} alt='logo icon' />
      </LogoImageWrpper>
      <AlarmImageWrpper>
        <img src={AlarmIcon} alt='alarm icon' />
      </AlarmImageWrpper>
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

const LogoImageWrpper = styled.div`
  width: 5.8rem;
  height: 3s.6rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const AlarmImageWrpper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;
