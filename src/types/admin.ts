export interface DeclareTabInterface {
  id: number;
  title: string;
  code: 'post' | 'reply';
}
export interface Request {
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: string;
  keyword?: string;
  majorCategory?: string;
}

export interface ReportListInterface {
  dataList: ReportInterface[];
  size: number;
  hasNext: boolean;
}
export interface ReportInterface {
  content: string; // title
  postId: number;
  replyId?: number;
  reportCount: number; // totalReportCount
  writer: {
    memberId: number;
    nickname: string;
    imageUrl: string;
  };
}
export interface ReportPostInterface {
  title: string;
  postId: number;
  totalReportCount: number;
  writer: {
    memberId: number;
    nickname: string;
    imageUrl: string;
  };
}

export interface ReportDetailListInterface {
  dataList: ReportDetailPostInterface[] | ReportDetailReplyInterface[];
  size: number;
  hasNext: boolean;
}
export interface ReportDetailInterface {
  reporter: string;
  type: string;
  content: string;
}
export interface ReportDetailPostInterface extends ReportDetailInterface {
  postReportId: number;
  postId: number;
}
export interface ReportDetailReplyInterface extends ReportDetailInterface {
  replyReportId: number;
  replyId: number;
}

export interface RequestReportListInterface {
  category: 'post' | 'reply';
  page: number;
  size?: number;
  sortBy?: string;
  direction?: string;
}

export interface RequestReportDetailInterface {
  id: number;
  page?: number;
  size?: number;
  sortBy?: string;
  direction?: string;
}

export interface PageStatusInterface {
  page: number;
  size?: number;
  hasNext: boolean;
}

export interface RequestAccountListInterface {
  page: number;
  keyword?: string;
  size?: number;
  sortBy?: string;
  direction?: string;
}

export interface AccountListInterface {
  dataList: AccountInterface[];
  size: 0;
  hasNext: true;
}

export interface AccountInterface {
  memberId: number;
  mail: string;
  nickname: string;
  roles: 'ROLE_USER';
  imageUrl: string;
  createAt: string;
  updateAt: string;
  locked: true;
}
