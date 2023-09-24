export enum Category {
  'help',
  'free',
}
export type PostList = {
  dataList: Post[];
  size: number;
  next: boolean;
};
export type Post = {
  postId: number;
  writer: string;
  major: string;
  category: keyof typeof Category;
  title: string;
  content: string;
  viewCount: number;
  recommendCount: number;
  replyCount: number;
  images: string[] | [];
  createAt: string;
  updateAt: string;
};
export type RequestPostCreate = {
  major: string;
  category: keyof typeof Category;
  title: string;
  content: string;
};
export type RequestPostUpdate = {
  postId: number;
  major?: string;
  category?: keyof typeof Category;
  title?: string;
  content?: string;
};

export type ReplyList = {
  dataList: Reply[];
  size: number;
  next: boolean;
};
export type Reply = {
  replyId: number;
  writer: string;
  postId: number;
  content: string;
  recommendCount: number;
  createAt: string;
  updateAt: string;
};
export type RequestReplyCreate = {
  postId: number;
  content: string;
};
export type RequestReplyUpdate = {
  replyId: number;
  content?: string;
};

export type getPostListOptions = {
  page?: number;
  size?: number;
  keyword?: string;
  order?: string;
  category?: string;
  majorCategory?: string;
};
