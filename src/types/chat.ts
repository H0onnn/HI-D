export type ChatRoomList = {
  dataList: ChatRoom[];
  size: number;
  next: boolean;
};
export type ChatRoom = {
  roomId: number;
  members: string[];
  createAt: string;
  updateAt: string;
};
export type RequestChatRoomCreate = {
  memberId: string;
};
export type RequestChatRoomUpdate = {
  roomId: number;
};
export type RequestChatRoomDelete = {
  roomId: number;
};
export type Chat = {
  roomId: number;
  memberId: string;
  content: string;
};
