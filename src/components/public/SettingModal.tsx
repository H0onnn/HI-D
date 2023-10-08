import React, { useRef } from 'react';
import styled from 'styled-components';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import { colors } from '@/constants/colors';

type Props = {
  position?: string;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  settingList: { title: string; icon: string; clickHandler: () => void }[];
};

const SettingModal = ({ position = '', setModal, settingList }: Props) => {
  const { openScroll } = useBodyScrollLock();
  const modalBackground = useRef(null);

  const closeModalHanlder = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalBackground.current) {
      setModal(false);
      openScroll();
    }
  };
  return (
    <>
      <BackDrop ref={modalBackground} onClick={closeModalHanlder} />
      <Layout $position={position}>
        {settingList.map((item, index) => (
          <MenuItem key={index} onClick={item.clickHandler}>
            <MenuIcon></MenuIcon>
            <MenuText>{item.title}</MenuText>
          </MenuItem>
        ))}
      </Layout>
    </>
  );
};

export default SettingModal;

const Layout = styled.div<{ $position: string }>`
  z-index: 50;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -6rem;
  right: 1.8rem;
  background: ${colors.white};
  border-radius: 0.8rem;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 6px 15px 0px rgba(0, 0, 0, 0.1);
  ${({ $position }) => $position};
`;
const MenuItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 1rem 1.6rem;
  width: 16rem;
  height: 4.8rem;
  border-bottom: 1px solid #f3f3f3;
  &:last-child {
    border-bottom: none;
  }
`;
const MenuText = styled.div`
  color: #babfc2;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const MenuIcon = styled.div`
  flex: none;
  width: 2.4rem;
  height: 2.4rem;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 49;
  overflow: hidden;
`;
