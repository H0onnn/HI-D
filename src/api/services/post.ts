import { PostList, PostDetailInterface } from '@/types/post';
import { httpClient } from '../httpClient';

export const getHelpPostList = async ({
  page,
  sortBy = 'createAt',
  direction = 'DESC',
  keyword = '',
  majorCategory,
}: {
  page?: number;
  sortBy?: string;
  direction?: string;
  keyword?: string;
  majorCategory?: string;
}): Promise<PostList> => {
  const response = await httpClient.post.get.needhelp({
    page,
    sortBy,
    direction,
    keyword,
    majorCategory,
  });
  return response.data;
};

export const getFreePostList = async ({
  page,
  sortBy = 'createAt',
  direction = 'DESC',
  keyword = '',
  tag,
}: {
  page?: number;
  sortBy?: string;
  direction?: string;
  keyword?: string;
  tag?: string;
}): Promise<PostList> => {
  const response = await httpClient.post.get.free({
    page,
    sortBy,
    direction,
    keyword,
    tag,
  });
  return response.data;
};

export const getPostDetailData = async (postId: number): Promise<PostDetailInterface> => {
  const response = await httpClient.post.get.posts(postId);
  return response.data;
};
