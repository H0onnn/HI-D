import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import BACK_ICON from '@/public/images/headerBackBtn.png';
import BACK_WHITE from '@/public/images/ui/headerBackBtn_white.svg';
import { LINK } from '@/constants/links';

interface PageHeaderInterface {
  title?: string;
  isGoBack?: boolean;
  onClick?: () => void;
}

const PageHeader = ({ title, isGoBack, onClick }: PageHeaderInterface) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isWhite = location.pathname === LINK.MYPAGE;

  const backClickHandler = () => {
    if (isGoBack === true) {
      navigate(-1);
      return;
    }

    if (onClick) {
      onClick();
      return;
    }

    navigate(LINK.MAIN);
  };

  return (
    <PageHeaderLayout $isWhite={isWhite}>
      <BackButtonBox>
        <img
          style={{
            width: '100%',
            height: '100%',
          }}
          src={isWhite ? BACK_WHITE : BACK_ICON}
          alt='back_button'
          onClick={backClickHandler}
        />
      </BackButtonBox>
      <HeaderTitle $isWhite={isWhite}>{title}</HeaderTitle>
      <div
        style={{
          width: '2.4rem',
        }}
      ></div>
    </PageHeaderLayout>
  );
};

export default PageHeader;

const PageHeaderLayout = styled.div<{ $isWhite: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 39rem;
  height: 4.8rem;
  position: fixed;
  z-index: 1;
  top: 0;
  padding: 2rem;
  background-color: ${({ $isWhite }) => ($isWhite ? 'transparent' : colors.white)};
`;

const BackButtonBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

const HeaderTitle = styled.div<{ $isWhite: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ $isWhite }) => ($isWhite ? colors.white : colors.black)};
`;
