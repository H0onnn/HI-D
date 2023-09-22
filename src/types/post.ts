export type Post = {
  writer: string;
  major: string;
  category: Category;
  title: string;
  images: string[] | [];
};

export type Comment = {
  postId: number;
  writer: string;
  content: string;
};

enum Category {
  'free',
  'help',
}

export type PostList = {
  dataList: PostDetail[];
  size: number;
  next: boolean;
};
export type PostDetail = {
  postId: number;
  writer: string;
  major: string;
  category: Category;
  title: string;
  viewCount: number;
  recommendCount: number;
  reportCount: number;
  replyCount: number;
  images: string[] | [];
  createAt: string;
  updateAt: string;
};
export type CommentList = {
  dataList: CommentDetail[];
  size: number;
  next: boolean;
};
export type CommentDetail = {
  replyId: number;
  writer: string;
  postId: number;
  content: string;
  recommendCount: number;
  createAt: string;
  updateAt: string;
};
