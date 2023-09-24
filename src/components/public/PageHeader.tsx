import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import BackIcon from '../../public/images/headerBackBtn.png';

interface PageHeaderInterface {
  title: string;
  onClick?: () => void;
}

const PageHeader = ({ title, onClick }: PageHeaderInterface) => {
  return (
    <PageHeaderLayout>
      <BackButtonBox>
        <img
          style={{
            width: '100%',
            height: '100%',
          }}
          src={BackIcon}
          alt='back button'
          onClick={onClick}
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
