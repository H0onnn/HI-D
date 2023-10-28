import {
  ChatRoomInterface,
  ChatRoomListInterface,
  MessageListInterface,
  RequestChatRoomCreateInterface,
  RequestChatRoomDeleteInterface,
  RequestChatRoomListInterface,
  RequestMessageListInterface,
} from '@/types/chat';
import { httpClient } from '../api/httpClient';

export const getChatRoomList = async ({
  page,
}: RequestChatRoomListInterface): Promise<ChatRoomListInterface> => {
  const response = await httpClient.chat.get.chatrooms({ page });
  return response.data;
};
export const postChatRoom = async ({
  memberId,
}: RequestChatRoomCreateInterface): Promise<ChatRoomInterface> => {
  const response = await httpClient.chat.post.chatroom({ memberId });
  return response.data;
};

export const deleteChatRoom = async ({ roomId }: RequestChatRoomDeleteInterface): Promise<void> => {
  await httpClient.chat.delete.chatroom({ roomId });
};

export const getMessageList = async ({
  roomId,
  page,
}: RequestMessageListInterface): Promise<MessageListInterface> => {
  const response = await httpClient.chat.get.messages({ roomId, page });
  return response.data;
};
