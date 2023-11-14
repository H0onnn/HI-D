export interface CommentsDataInterface {
  dataList: CommentDataInterface[];
  size: number;
  hasNext: boolean;
}

export interface MyCommentsDataInterface {
  dataList: MyCommentDataInterface[];
  size: number;
  hasNext: boolean;
}
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
  recommend: boolean;
  mine: boolean;
  anonymous: boolean;
}

export interface MyCommentDataInterface {
  replyId: number;
  postId: number;
  content: string;
  title: string;
  recommendCount: number;
  createAt: string;
  updateAt: string;
}
