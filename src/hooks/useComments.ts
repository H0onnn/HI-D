import { useState, useEffect } from 'react';
import { CommentDataInterface } from '@/types/comment';
import { httpClient } from '@/api/httpClient';
import toast from 'react-hot-toast';
import useObserver from './useObserver';

const useComments = (postId: number) => {
  const [comments, setComments] = useState<CommentDataInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const size = COMMENTS_PER_PAGE;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await httpClient.comment.get.replies(postId, page, size);
      return response.data;
    } catch (err: unknown) {
      console.error('댓글 데이터 fetching 에러 : ', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const fetchComments = async () => {
    if (isLoading || !hasMore) return;

    try {
      const data = await fetchData();
      setComments((prev) => [...prev, ...data.dataList]);
      if (!data.hasNext) {
        setHasMore(false);
      }
    } catch {
      toast.error('댓글을 불러오는 중 오류가 발생했습니다.', { id: 'commentFetchingError' });
    }
  };

  const postComment = async (newCommentContent: string) => {
    try {
      const response = await httpClient.comment.post.replies(postId, newCommentContent);
      return response.data;
    } catch (err: unknown) {
      console.error('댓글 작성 에러 : ', err);
      throw err;
    }
  };

  const addCommentHandler = async (newCommentContent: string) => {
    try {
      const newComment = await postComment(newCommentContent);
      setComments((prevComments) => [newComment, ...prevComments]);
      toast.success('댓글이 등록되었습니다.', { id: 'commentSubmitSuccess' });
    } catch {
      toast.error('댓글 등록에 실패하였습니다.', { id: 'commentSubmitError' });
    }
  };

  const nextPageHandler = () => {
    if (isLoading || !hasMore) return;
    setPage((prev) => prev + 1);
  };

  const loadMoreRef = useObserver(nextPageHandler);

  useEffect(() => {
    fetchComments();
  }, [page]);

  return { comments, addCommentHandler, loadMoreRef };
};

export default useComments;

const COMMENTS_PER_PAGE = 10;
