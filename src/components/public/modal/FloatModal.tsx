import React from 'react';
import styled from 'styled-components';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { useNavigate } from 'react-router-dom';
import FreeIcon from '@/public/images/floatingNav/free_icon.svg';
import HelpIcon from '@/public/images/floatingNav/help_icon.svg';
import { colors } from '@/constants/colors';
import { LINK } from '@/constants/links';
import useModalStore from '@/store/modalStore';
import { FloatingItem, FloatingMenu } from '@/layout/FloatingNav';

const FloatModal = () => {
  const { openScroll } = useBodyScrollLock();
  const { closeModal } = useModalStore();
  const navigate = useNavigate();

  const movePageHandler = (link: string) => {
    closeModal();
    openScroll();
    navigate(link);
  };

  return (
    <FloatingMenu style={{ bottom: '15rem' }}>
      <FloatingItem onClick={() => movePageHandler(LINK.POSTING_HELP)}>
        <MeneText>
          <h3>도움이 필요해요</h3>
          <p>전공고민 질문하기</p>
        </MeneText>
        <MenuIcon>
          <img src={HelpIcon} alt={'help_icon'} />
        </MenuIcon>
      </FloatingItem>
      <FloatingItem onClick={() => movePageHandler(LINK.POSTING_FREE)}>
        <MeneText>
          <h3>자유게시판</h3>
          <p>자유롭게 글쓰기</p>
        </MeneText>
        <MenuIcon>
          <img src={FreeIcon} alt={'free_icon'} />
        </MenuIcon>
      </FloatingItem>
    </FloatingMenu>
  );
};
export default FloatModal;

const MeneText = styled.div`
  color: ${colors.white};
  text-align: right;
  > h3 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  > p {
    font-size: 14px;
  }
`;
const MenuIcon = styled.div`
  width: 5.2rem;
  height: 5.2rem;
  background: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 0;
  > img {
    padding-top: 0.8rem;
    width: 180%;
    height: 180%;
    object-fit: cover;
  }
`;
