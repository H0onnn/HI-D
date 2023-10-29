import { httpClient } from '../httpClient';
import { CommentsDataInterface, CommentDataInterface } from '@/types/comment';

export const getCommentsData = async (
  postId: number,
  page: number,
  size: number,
): Promise<CommentsDataInterface> => {
  const response = await httpClient.comment.get.replies(postId, page, size);
  return response.data;
};

export const postComment = async (
  postId: number,
  content: string,
): Promise<CommentDataInterface> => {
  const response = await httpClient.comment.post.replies(postId, content);
  return response.data;
};
