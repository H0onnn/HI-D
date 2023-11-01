import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import BackIcon from '../../public/images/headerBackBtn.png';
import { LINK } from '@/constants/links';

interface PageHeaderInterface {
  title?: string;
  onClick?: () => void;
}

const PageHeader = ({ title, onClick }: PageHeaderInterface) => {
  const navigate = useNavigate();

  const backClickHandler = () => {
    if (onClick) {
      onClick();
      return;
    }
    navigate(LINK.MAIN);
  };

  return (
    <PageHeaderLayout>
      <BackButtonBox>
        <img
          style={{
            width: '100%',
            height: '100%',
          }}
          src={BackIcon}
          alt='back_button'
          onClick={backClickHandler}
        />
      </BackButtonBox>
      <HeaderTitle>{title}</HeaderTitle>
      <div
        style={{
          width: '2.4rem',
        }}
      ></div>
    </PageHeaderLayout>
  );
};

export default PageHeader;

const PageHeaderLayout = styled.div`
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
  background-color: ${colors.white};
`;

const BackButtonBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;
