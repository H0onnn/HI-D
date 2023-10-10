import { Category } from './post';

enum ReportType {
  '욕설',
  '음란성',
  '광고',
  '기타',
}
export type RequestReportPost = {
  postId: number;
  type: keyof typeof ReportType;
  content: string;
};
export type RequestReportReply = {
  replyId: number;
  type: keyof typeof ReportType;
  content: string;
};
export type ReportPost = {
  postId: number;
  writer: string;
  major: string;
  category: keyof typeof Category;
  title: string;
  content: string;
  viewCount: number;
  recommendCount: number;
  replyCount: number;
  createAt: string;
  updateAt: string;
};
export type ReportPostList = {
  dataList: ReportPost[];
  size: number;
  next: boolean;
};
export type ReportReply = {
  replyId: number;
  writer: string;
  postId: number;
  content: string;
  recommendCount: number;
  reportCount: number;
  createAt: string;
  updateAt: string;
};
export type ReportReplyList = {
  dataList: ReportReply[];
  size: number;
  next: boolean;
};
