import { colors } from '@/constants/colors';
import { ReportDetailInterface } from '@/types/admin';
import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleOpenIcon from '@/public/images/ui/toggle_open.svg';
import ToggleCloseIcon from '@/public/images/ui/toggle_close.svg';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useModalStore from '@/store/modalStore';
import { MODAL_TYPES } from '@/types/modal';
import { deleteReportDetail } from '@/services/admin';

const DeclareDetailContent = ({ reporter, type, content, id, reportId, category }: Props) => {
  const [open, setOpen] = useState(false);
  const { lockScroll } = useBodyScrollLock();
  const { openModal, closeModal } = useModalStore();

  const deleteReportDetailHandler = async () => {
    closeModal();
    const resposne = await deleteReportDetail({ id, reportId, category });
    if (resposne) {
      // TODO: toast alert
    } else {
      // TODO: toast alert
    }
  };

  const deleteModalHandler = () => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: `해당 신고 내역을 삭제하시겠습니까?`,
        content: '삭제 처리한 내역으로 신고 횟수에 추가되지 않아요',
        confirmText: '삭제',
        onConfirmHandler: deleteReportDetailHandler,
      },
    });
    lockScroll();
  };

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
        <DeleteButton onClick={deleteModalHandler} disabled={!open}>
          삭제하기
        </DeleteButton>
      </DetailContents>
    </Layout>
  );
};

export default DeclareDetailContent;

interface Props extends ReportDetailInterface {
  id: number;
  reportId: number;
  category: 'post' | 'reply';
}

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
  width: 100%;
  gap: 1rem;
  padding: 0 1.5rem 1rem 1.5rem;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  height: ${({ $open }) => ($open ? 'auto' : '0')};
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '100%' : '0')};
  margin-top: ${({ $open }) => ($open ? '2.5rem' : '')};
  transition: all 0.3s ease;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  margin: 2rem 0 0 0;
  height: 4.8rem;
  width: 100%;
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: ${colors.primary};
  font-size: 16px;
  font-weight: bold;
  border: none;
  color: ${colors.white};
  text-align: center;
`;
