export interface CommentDataInterface {
  replyId: number;
  postId: number;
  writer: {
    memberId: number;
    nickname: string;
    imageUrl: string;
  };
  content: string;
  recommendCount: number;
  createdAt: string;
  updatedAt: string;
  anonymous: boolean;
}
