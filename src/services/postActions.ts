import { httpClient } from '@/api/httpClient';
import { ReportDataInterface } from '@/types/report';

export const postLike = async (postId: number) => {
  try {
    await httpClient.post.patch.like(postId);
  } catch (err: unknown) {
    console.error('게시글 좋아요 에러 : ', err);
  }
};

export const postBookmark = async (postId: number) => {
  try {
    await httpClient.post.patch.bookmark(postId);
  } catch (err: unknown) {
    console.error('게시글 북마크 에러 : ', err);
  }
};

export const postReport = async (postId: number, data: ReportDataInterface) => {
  try {
    await httpClient.post.post.report(postId, data);
  } catch (err: unknown) {
    console.error('게시글 신고 에러 : ', err);
    throw err;
  }
};

export const postDelete = async (postId: number): Promise<void> => {
  try {
    await httpClient.post.delete.deletePost(postId);
  } catch (err: unknown) {
    console.error('게시글 삭제 오류 : ', err);
    throw err;
  }
};
