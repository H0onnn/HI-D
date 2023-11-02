import { httpClient } from '@/api/httpClient';
import {
  ReportDetailPostInterface,
  ReportDetailReplyInterface,
  ReportListInterface,
  ReportPostInterface,
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
}: RequestReportDetailInterface): Promise<ReportDetailPostInterface> => {
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
}: RequestReportDetailInterface): Promise<ReportDetailReplyInterface> => {
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
}): Promise<void> => {
  try {
    if (category === 'post') {
      await httpClient.report.delete.post({ reportId, id });
    } else {
      await httpClient.report.delete.reply({ reportId, id });
    }
  } catch (e) {
    throw new Error();
  }
};
