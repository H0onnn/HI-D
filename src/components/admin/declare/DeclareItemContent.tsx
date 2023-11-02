import { colors } from '@/constants/colors';
import { ReportDetailInterface } from '@/types/admin';
import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleOpenIcon from '@/public/images/ui/toggle_open.svg';
import ToggleCloseIcon from '@/public/images/ui/toggle_close.svg';

const DeclareItemContent = ({ reporter, type, content }: ReportDetailInterface) => {
  const [open, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen(!open);
  };
  return (
    <Layout>
      <SimpleContents onClick={toggleHandler}>
        <Title>신고자</Title>
        <Content>{reporter}</Content>
        <ToggleButton>
          <img
            src={open ? ToggleOpenIcon : ToggleCloseIcon}
            alt={'toggle_icon'}
            width={24}
            height={24}
          />
        </ToggleButton>
      </SimpleContents>
      <DetailContents $open={open}>
        <TypeWrpper>
          <Title>신고유형</Title>
          <Content>{type}</Content>
        </TypeWrpper>
        <ContentWapper>
          <Title>상세내용</Title>
          <Content>{content}</Content>
        </ContentWapper>
        <DeleteButton>삭제하기</DeleteButton>
      </DetailContents>
    </Layout>
  );
};

export default DeclareItemContent;

const Layout = styled.div`
  border-radius: 1.2rem;
  border: 1px solid ${colors.gray2};
`;

const Title = styled.div`
  width: 7.6rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90rem;
  background: ${colors.pastel};
  color: ${colors.primary};
  text-align: center;
  font-size: 14px;
`;
const Content = styled.div`
  color: ${colors.gray6};
  font-size: 16px;
  padding-left: 0.4rem;
  display: flex;
  align-items: center;
`;

const SimpleContents = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  padding: 1rem 1.5rem 0 1.5rem;
`;
const TypeWrpper = styled.div`
  display: flex;
  padding-bottom: 2.5rem;
`;
const ContentWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ToggleButton = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
`;

const DetailContents = styled.div<{ $open: boolean }>`
  cursor: pointer;
  gap: 1rem;
  padding: 0 1.5rem 1rem 1.5rem;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  max-height: ${({ $open }) => ($open ? '100%' : '0')};
  padding-top: ${({ $open }) => ($open ? '2.5rem' : '0')};
  transition: all 0.3s ease;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  margin: 2rem 0 0 0;
  height: 4.8rem;
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;
