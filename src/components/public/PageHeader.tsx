import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import BackIcon from '../../public/images/headerBackBtn.png';

interface PageHeaderInterface {
  title: string;
}

const PageHeader = ({ title }: PageHeaderInterface) => {
  const navigate = useNavigate();

  const backButtonClickHandler = () => navigate(-1);

  return (
    <PageHeaderLayout>
      <BackButtonBox>
        <img src={BackIcon} alt='back button' onClick={backButtonClickHandler} />
      </BackButtonBox>
      <HeaderTitle>{title}</HeaderTitle>
      <div></div>
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
