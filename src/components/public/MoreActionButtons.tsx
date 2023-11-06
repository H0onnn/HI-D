import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import EDIT_ICON from '@/public/images/ui/post_edit_icon.svg';
import DELETE_ICON from '@/public/images/ui/post_delete_icon.svg';
import REPORT_ICON from '@/public/images/ui/report_icon.svg';
import CHAT_ICON from '@/public/images/ui/chat_icon.svg';

enum ButtonType {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
  CHAT = 'CHAT',
  REPORT = 'REPORT',
}

interface MoreActionButtonsInterface {
  id: number;
  isOwnContent: boolean;
  type: 'POST' | 'COMMENT';
  editHandler?: () => void;
  deleteHandler?: () => void;
  chatHandler?: () => void;
  reportHandler?: () => void;
}

const MoreActionButtons = ({
  isOwnContent,
  type,
  editHandler,
  deleteHandler,
  chatHandler,
  reportHandler,
}: MoreActionButtonsInterface) => {
  const getButtonsToRender = () => {
    if (type === 'POST') return [ButtonType.EDIT, ButtonType.DELETE];
    return isOwnContent
      ? [ButtonType.EDIT, ButtonType.DELETE]
      : [ButtonType.CHAT, ButtonType.REPORT];
  };

  const buttonsToRender = getButtonsToRender();

  const buttonClickHandler = (btnType: ButtonType) => {
    switch (btnType) {
      case ButtonType.EDIT:
        if (editHandler) editHandler();
        break;
      case ButtonType.DELETE:
        if (deleteHandler) deleteHandler();
        break;
      case ButtonType.CHAT:
        if (chatHandler) chatHandler();
        break;
      case ButtonType.REPORT:
        if (reportHandler) reportHandler();
        break;
    }
  };

  return (
    <ActionButtonsContainer>
      {buttonsToRender.map((btnType, index) => (
        <React.Fragment key={btnType}>
          <ActionButton onClick={() => buttonClickHandler(btnType)}>
            <ButtonIcon src={BUTTONS_CONFIG[btnType].icon} alt={`${btnType}_icon`} />
            <ButtonText>{BUTTONS_CONFIG[btnType].text}</ButtonText>
          </ActionButton>
          {index !== buttonsToRender.length - 1 && <LineDiv />}
        </React.Fragment>
      ))}
    </ActionButtonsContainer>
  );
};

export default MoreActionButtons;

const BUTTONS_CONFIG = {
  [ButtonType.EDIT]: {
    icon: EDIT_ICON,
    text: '수정하기',
  },
  [ButtonType.DELETE]: {
    icon: DELETE_ICON,
    text: '삭제하기',
  },
  [ButtonType.CHAT]: {
    icon: CHAT_ICON,
    text: '채팅하기',
  },
  [ButtonType.REPORT]: {
    icon: REPORT_ICON,
    text: '신고하기',
  },
};

const ActionButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
`;

const ActionButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ButtonIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: cover;
`;

const ButtonText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${colors.gray5};
`;

const LineDiv = styled.div`
  width: 12rem;
  height: 0.1rem;
  background-color: ${colors.gray3};
`;
