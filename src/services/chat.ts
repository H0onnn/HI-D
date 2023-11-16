import {
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
  try {
    const response = await httpClient.chat.get.chatrooms({ page });
    return response.data;
  } catch (err: unknown) {
    throw new Error();
  }
};
export const postChatRoom = async ({
  memberId,
}: RequestChatRoomCreateInterface): Promise<{ chatRoomId: number } | undefined> => {
  try {
    const response = await httpClient.chat.post.chatroom({ memberId });
    if (response.status === 201) {
      return response.data;
    }
  } catch (err: unknown) {
    throw new Error();
  }
};

export const deleteChatRoom = async ({
  roomId,
}: RequestChatRoomDeleteInterface): Promise<boolean> => {
  const response = await httpClient.chat.delete.chatroom({ roomId });
  if (response.status === 204) {
    return true;
  } else {
    return false;
  }
};

export const getMessageList = async ({
  roomId,
  page,
}: RequestMessageListInterface): Promise<MessageListInterface> => {
  try {
    const response = await httpClient.chat.get.messages({ roomId, page });
    return response.data;
  } catch (err: unknown) {
    throw new Error();
  }
};
