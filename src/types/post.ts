export enum Category {
  'NEED_HELP',
  'FREE',
}

export enum FreePostTags {
  '전체' = 0,
  '연애',
  '일상',
  '같이해요',
  '맛집',
  '잡담',
}
export type FreePostTag = keyof typeof FreePostTags;
export interface TagInterface {
  id: number;
  name: string;
  en: string;
}
export interface TabInterface {
  id: number;
  name: string;
  category: string;
  link?: string;
}

export interface PageStatusInterface {
  page: number;
  size?: number;
  hasNext: boolean;
}
export interface PostListInterface {
  dataList: PostInterface[];
  size: number;
  hasNext: boolean;
}
export interface PostInterface {
  postId: number;
  title: string;
  content: string;
  thumbnailImages?: string[];
  viewCount: number;
  recommendCount: number;
  replyCount: number;
  writer?: {
    memberId: number;
    nickname: string;
    imageUrl: string;
  };
  anonymous: boolean;
  boardType: keyof typeof Category;
  majorCategory?: string;
  createAt: string;
  updateAt?: string;
}

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

export interface PostContainerProps {
  keyword?: string;
  errorMessage?: string;
}
export interface PostListProps {
  postList: PostInterface[];
  pageStatus: PageStatusInterface;
  nextPageHandler: () => void;
  keyword?: string;
  errorMessage?: string;
}
export interface PostProps {
  post: PostInterface;
  keyword?: string;
  onClick?: () => void;
}
export interface PostCountInterface {
  recommendCount: number;
  replyCount: number;
  viewCount: number;
  darkMode?: boolean;
}

export interface PostDetailInterface {
  postId: number;
  writer: Writer;
  title: string;
  content: string;
  viewCount: number;
  recommendCount: number;
  replyCount: number;
  images: string[];
  createAt: string;
  updateAt: string;
  isAnonymous: boolean;
  boardType: string;
}

export interface Writer {
  memberId: number;
  nickname: string;
  imageUrl: string;
  school: string;
  major: string;
}

export interface RequestHelpPostListInterface {
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: string;
  keyword?: string;
  majorCategory?: string;
}
export interface RequestFreePostListInterface {
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: string;
  keyword?: string;
  tag?: string;
}
