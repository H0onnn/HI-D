import { httpClient } from '@/api/httpClient';
import {
  AccountListInterface,
  ReportDetailPostListInterface,
  ReportDetailReplyListInterface,
  ReportListInterface,
  ReportPostInterface,
  RequestAccountListInterface,
  RequestReportDetailInterface,
  RequestReportListInterface,
} from '@/types/admin';

export const getReportList = async ({
  page,
  category,
  size = 10,
  sortBy = 'createAt',
  direction = 'DESC',
}: RequestReportListInterface): Promise<ReportListInterface> => {
  try {
    if (category === 'post') {
      const response = await httpClient.report.get.postList({
        page,
        size,
        sortBy,
        direction,
      });
      let processedData: ReportListInterface = {
        dataList: [],
        size: 0,
        hasNext: false,
      };
      if (response.data) {
        processedData = {
          dataList: response.data.dataList.map((item: ReportPostInterface) => ({
            content: item.title,
            postId: item.postId,
            reportCount: item.totalReportCount,
            writer: {
              memberId: item.writer.memberId,
              nickname: item.writer.nickname,
              imageUrl: item.writer.imageUrl,
            },
          })),
          size: response.data.size,
          hasNext: response.data.hasNext,
        };
      }
      return processedData;
    } else {
      const response = await httpClient.report.get.replyList({
        page,
        size,
        sortBy,
        direction,
      });
      return response.data;
    }
  } catch (e) {
    throw new Error();
  }
};

export const getReportPostDetail = async ({
  id,
  page,
  size = 10,
  sortBy = 'createAt',
  direction = 'DESC',
}: RequestReportDetailInterface): Promise<ReportDetailPostListInterface> => {
  try {
    const response = await httpClient.report.get.post({
      id,
      page,
      size,
      sortBy,
      direction,
    });
    return response.data;
  } catch (e) {
    throw new Error();
  }
};

export const getReportReplyDetail = async ({
  id,
  page,
  size = 10,
  sortBy = 'createAt',
  direction = 'DESC',
}: RequestReportDetailInterface): Promise<ReportDetailReplyListInterface> => {
  try {
    const response = await httpClient.report.get.reply({
      id,
      page,
      size,
      sortBy,
      direction,
    });
    return response.data;
  } catch (e) {
    throw new Error();
  }
};

export const deleteReportDetail = async ({
  reportId,
  id,
  category,
}: {
  reportId: number;
  id: number;
  category: 'post' | 'reply';
}): Promise<boolean> => {
  try {
    if (category === 'post') {
      const response = await httpClient.report.delete.post({ reportId, id });
      if (response.status === 204) {
        return true;
      }
      return false;
    } else {
      const response = await httpClient.report.delete.reply({ reportId, id });
      if (response.status === 204) {
        return true;
      }
      return false;
    }
  } catch (e) {
    throw new Error();
  }
};

export const getAccountList = async ({
  keyword,
  page,
  size = 10,
  sortBy = 'createAt',
  direction = 'DESC',
}: Partial<RequestAccountListInterface>): Promise<AccountListInterface> => {
  try {
    const response = await httpClient.account.get.accountList({
      keyword,
      page,
      size,
      sortBy,
      direction,
    });
    return response.data;
  } catch (e) {
    throw new Error();
  }
};

export const lockAccount = async (memberId: number): Promise<boolean> => {
  try {
    const response = await httpClient.account.patch.account(memberId);
    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (e) {
    throw new Error();
  }
};

export const deleteAccount = async (memberId: number): Promise<boolean> => {
  try {
    const response = await httpClient.account.delete.account(memberId);
    if (response.status === 204) {
      return true;
    }
    return false;
  } catch (e) {
    throw new Error();
  }
};
