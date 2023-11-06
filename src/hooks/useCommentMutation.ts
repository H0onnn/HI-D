import { useQueryClient, useMutation, UseMutateFunction } from '@tanstack/react-query';
import useModalStore from '@/store/modalStore';
import { QUERY_KEY as commentQueryKey } from './useCommentQuery';
import { postComment, patchComment, deleteComment } from '@/services/comments';
import { CommentDataInterface } from '@/types/comment';
import { MODAL_TYPES } from '@/types/modal';
import toast from 'react-hot-toast';

interface UseCommentMutationReturnType {
  addComment: UseMutateFunction<
    CommentDataInterface,
    Error,
    { postId: number; content: string },
    unknown
  >;
  editComment: UseMutateFunction<
    CommentDataInterface,
    Error,
    { replyId: number; content: string },
    unknown
  >;
  deleteComment: (replyId: number, postId: number) => void;
}

const useCommentMutation = (): UseCommentMutationReturnType => {
  const queryClient = useQueryClient();
  const { openModal, closeModal } = useModalStore();

  const addCommentMutation = useMutation<
    CommentDataInterface,
    Error,
    { postId: number; content: string }
  >({
    mutationFn: (variables) => postComment(variables.postId, variables.content),
    onError: () => {
      toast.error('댓글 작성에 실패했어요.', { id: 'commentSubmitError' });
    },
    onSuccess: (data) => {
      toast.success('댓글이 등록되었어요.', { id: 'commentSubmitSuccess' });
      queryClient.invalidateQueries({ queryKey: [commentQueryKey, data.postId] });
    },
  });

  const editCommentMutation = useMutation<
    CommentDataInterface,
    Error,
    { replyId: number; content: string }
  >({
    mutationFn: (variables) => patchComment(variables.replyId, variables.content),
    onError: () => {
      toast.error('댓글 수정에 실패했어요.', { id: 'commentEditError' });
    },
    onSuccess: (data) => {
      toast.success('댓글이 수정되었어요.', { id: 'commentEditSuccess' });
      queryClient.invalidateQueries({ queryKey: [commentQueryKey, data.postId] });
    },
  });

  const deleteCommentMutation = useMutation<void, Error, { replyId: number; postId: number }>({
    mutationFn: (variables) => deleteComment(variables.replyId),
    onError: () => {
      toast.error('댓글 삭제에 실패했어요.', { id: 'commentDeleteError' });
    },
    onSuccess: (_, variables) => {
      toast.success('댓글이 삭제되었어요.', { id: 'commentDeleteSuccess' });
      queryClient.invalidateQueries({ queryKey: [commentQueryKey, variables.postId] });
    },
  });

  const deleteCommentHandler = (replyId: number, postId: number) => {
    closeModal();

    deleteCommentMutation.mutate({ replyId, postId });
  };

  const deleteCommentModalHandler = (replyId: number, postId: number) => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: '해당 댓글을 삭제하시겠어요?',
        content: '삭제한 댯글 데이터는 복구할 수 없어요',
        confirmText: '삭제',
        onConfirmHandler: () => deleteCommentHandler(replyId, postId),
      },
    });
  };

  return {
    addComment: addCommentMutation.mutate,
    editComment: editCommentMutation.mutate,
    deleteComment: deleteCommentModalHandler,
  };
};

export default useCommentMutation;
