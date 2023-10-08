export interface ChatRoomListInterface {
  dataList: ChatRoomInterface[];
  size: number;
  next: boolean;
}
export interface ChatRoomInterface {
  roomId: number;
  members: { id: string; nickname: string; profileImage: string }[]; // member[]
  recentChatContent: string;
  recentChatTime: string;
  // unreadChatCount: number;
  // updatedAt: string;
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
  nickname: string;
  content: string;
  createdAt: string;
}
export interface RequestChatCreateInterface {
  roomId: number;
  memberId: string;
  content: string;
}
export interface PageStatusInterface {
  page: number;
  isNext: boolean;
}
export interface ChatModalStatusInterface {
  isOpen: boolean;
  roomId: number;
}
