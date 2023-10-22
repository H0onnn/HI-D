import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CHAT_ICON from '@/public/images/ui/chat_icon.svg';
import { LINK } from '@/constants/links';

const LinkChatButton = () => {
  const navigate = useNavigate();

  return (
    <LinkChatButtonContainer>
      <LinkChatButtonIcon src={CHAT_ICON} alt='채팅 아이콘' onClick={() => navigate(LINK.CHAT)} />
    </LinkChatButtonContainer>
  );
};

export default LinkChatButton;

const LinkChatButtonContainer = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const LinkChatButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
