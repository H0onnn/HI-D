export interface ChatRoomListInterface {
  dataList: ChatRoomInterface[];
  size: number;
  next: boolean;
}
export interface ChatRoomInterface {
  roomId: number;
  members: string[];
  // createAt: string;
  // updateAt: string;
}
export interface RequestChatRoomCreateInterface {
  memberId: string;
}
export interface RequestChatRoomUpdateInterface {
  roomId: number;
}
export interface RequestChatRoomDeleteInterface {
  roomId: number;
}
export interface ChatInterface {
  roomId: number;
  memberId: string;
  content: string;
  // 과거 채팅 기록도 가져올지?
  nickname: string;
  date: string;
  chatId: number;
}
export interface PageStatusInterface {
  page: number;
  isNext: boolean;
}
export interface ChatModalStatusInterface {
  isOpen: boolean;
  roomId: number;
}
