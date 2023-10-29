import { useState, useEffect } from 'react';
import { getCommentsData, postComment } from '@/services/comments';
import { CommentsDataInterface } from '@/types/comment';
import toast from 'react-hot-toast';
import useObserver from './useObserver';

const useComments = (postId: number) => {
  const [comments, setComments] = useState<CommentsDataInterface | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const size = COMMENTS_PER_PAGE;

  const fetchMoreComments = async () => {
    if (!hasMore) return;

    try {
      const data = await getCommentsData(postId, page, size);
      if (comments) {
        setComments({
          ...data,
          dataList: [...comments.dataList, ...data.dataList],
        });
      } else {
        setComments(data);
      }
      if (!data.hasNext) {
        setHasMore(false);
      }
    } catch {
      toast.error('댓글을 불러오는 중 오류가 발생했습니다.', { id: 'commentFetchingError' });
    }
  };

  const postNewComment = async (newCommentContent: string) => {
    try {
      const data = await postComment(postId, newCommentContent);
      return data;
    } catch (err: unknown) {
      console.error('댓글 작성 에러 : ', err);
      throw err;
    }
  };

  const addCommentHandler = async (newCommentContent: string) => {
    try {
      const newComment = await postNewComment(newCommentContent);
      setComments((prevComments) => {
        if (prevComments) {
          return {
            ...prevComments,
            dataList: [newComment, ...prevComments.dataList],
          };
        }
        return null;
      });
      toast.success('댓글이 등록되었습니다.', { id: 'commentSubmitSuccess' });
    } catch {
      toast.error('댓글 등록에 실패하였습니다.', { id: 'commentSubmitError' });
    }
  };

  const nextPageHandler = () => {
    if (!hasMore) return;
    setPage((prev) => prev + 1);
  };

  const loadMoreRef = useObserver(nextPageHandler);

  useEffect(() => {
    fetchMoreComments();
  }, [page]);

  return { comments, addCommentHandler, loadMoreRef };
};

export default useComments;

const COMMENTS_PER_PAGE = 10;
