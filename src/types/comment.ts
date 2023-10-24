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
  createAt: string;
  updateAt: string;
  anonymous: boolean;
}
