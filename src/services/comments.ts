import { httpClient } from '@/api/httpClient';
import {
  CommentsDataInterface,
  CommentDataInterface,
  MyCommentsDataInterface,
} from '@/types/comment';
import { ReportDataInterface } from '@/types/report';

export const getCommentsData = async (
  postId: number,
  page: number,
  size: number,
): Promise<CommentsDataInterface> => {
  try {
    const response = await httpClient.comment.get.replies(postId, page, size);
    return response.data;
  } catch (err: unknown) {
    console.error('댓글 조회 에러 : ', err);
    throw err;
  }
};

export const getMyCommentsData = async (
  page: number,
  size: number,
  boardType: string,
): Promise<MyCommentsDataInterface> => {
  try {
    const response = await httpClient.comment.get.myReplies(page, size, boardType);
    return response.data;
  } catch (err: unknown) {
    console.error('내 댓글 조회 에러 : ', err);
    throw err;
  }
};

export const postComment = async (
  postId: number,
  content: string,
): Promise<CommentDataInterface> => {
  try {
    const response = await httpClient.comment.post.reply(postId, content);
    return response.data;
  } catch (err: unknown) {
    console.error('댓글 작성 에러 : ', err);
    throw err;
  }
};

export const patchComment = async (
  replyId: number,
  content: string,
): Promise<CommentDataInterface> => {
  try {
    const response = await httpClient.comment.patch.reply(replyId, content);
    return response.data;
  } catch (err: unknown) {
    console.error('댓글 수정 에러 : ', err);
    throw err;
  }
};

export const deleteComment = async (replyId: number): Promise<void> => {
  try {
    await httpClient.comment.delete.reply(replyId);
  } catch (err: unknown) {
    console.error('댓글 삭제 에러 : ', err);
  }
};

export const commentReport = async (replyId: number, data: ReportDataInterface): Promise<void> => {
  try {
    await httpClient.comment.post.report(replyId, data);
  } catch (err: unknown) {
    console.error('댓글 신고 에러 : ', err);
  }
};

export const likeComment = async (replyId: number): Promise<void> => {
  try {
    await httpClient.comment.patch.like(replyId);
  } catch (err: unknown) {
    console.error('댓글 좋아요 에러 : ', err);
  }
};
