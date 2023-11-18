import {
  PostListInterface,
  RequestFreePostListInterface,
  RequestHelpPostListInterface,
  PostDetailInterface,
} from '@/types/post';
import { httpClient } from '../api/httpClient';

export const getHelpPostList = async ({
  page,
  sortBy = 'createAt',
  direction = 'DESC',
  keyword = '',
  majorCategory,
}: RequestHelpPostListInterface): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.needhelp({
      page,
      size: 10,
      sortBy,
      direction,
      keyword,
      majorCategory,
    });
    return response.data;
  } catch (e) {
    throw new Error('게시글 불러오기 오류');
  }
};

export const getFreePostList = async ({
  page,
  sortBy = 'createAt',
  direction = 'DESC',
  keyword = '',
  tag,
}: RequestFreePostListInterface): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.free({
      page,
      size: 10,
      sortBy,
      direction,
      keyword,
      tag,
    });
    return response.data;
  } catch (e) {
    throw new Error('게시글 불러오기 오류');
  }
};

export const getPostDetailData = async (postId: number): Promise<PostDetailInterface> => {
  const response = await httpClient.post.get.posts(postId);
  return response.data;
};

export const getMyPostList = async (
  page: number,
  boardType: string,
): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.myPosts(page, boardType);
    return response.data;
  } catch (e) {
    throw new Error('게시글 불러오기 오류');
  }
};

export const getMyBookmarkList = async (
  page: number,
  boardType: string,
): Promise<PostListInterface> => {
  try {
    const response = await httpClient.post.get.myBookmarks(page, boardType);
    return response.data;
  } catch (e) {
    throw new Error('게시글 불러오기 오류');
  }
};
