import { httpClient } from '../httpClient';

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

export const postDelete = async (postId: number) => {
  try {
    await httpClient.post.delete.deletePost(postId);
  } catch (err: unknown) {
    console.error('게시글 삭제 오류 : ', err);
    throw err;
  }
};
