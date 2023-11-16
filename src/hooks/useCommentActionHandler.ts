import { useQueryClient, useMutation, InfiniteData } from '@tanstack/react-query';
import { QUERY_KEY as commentQueryKey, CommentQueryResponse } from './useCommentQuery';
import { likeComment, commentReport } from '@/services/comments';
import toast from 'react-hot-toast';
import { ReportDataInterface } from '@/types/report';
import { useNavigate } from 'react-router-dom';
import useBodyScrollLock from './useBodyScrollLock';
import useModalStore from '@/store/modalStore';
import { postChatRoom } from '@/services/chat';
import { LINK } from '@/constants/links';
import { MODAL_TYPES } from '@/types/modal';

const useCommentActionHandler = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { lockScroll } = useBodyScrollLock();
  const { openModal } = useModalStore();

  const likeCommentMutation = useMutation<
    void,
    Error,
    { replyId: number; postId: number },
    { postId: number }
  >({
    mutationFn: ({ replyId }) => likeComment(replyId),
    onSuccess: (_, variables) => {
      const currentData = queryClient.getQueryData<InfiniteData<CommentQueryResponse>>([
        commentQueryKey,
        variables.postId,
      ]);
      if (currentData) {
        const updatedPages = currentData.pages.map((page) => {
          const updatedComments = page.dataList.map((comment) => {
            if (comment.replyId === variables.replyId) {
              return {
                ...comment,
                recommend: !comment.recommend,
                recommendCount: comment.recommend
                  ? comment.recommendCount - 1
                  : comment.recommendCount + 1,
              };
            }
            return comment;
          });
          return { ...page, dataList: updatedComments };
        });

        queryClient.setQueryData([commentQueryKey, variables.postId], {
          ...currentData,
          pages: updatedPages,
        });
      }
    },
    onError: (error) => {
      console.log('댓글 좋아요 에러 : ', error);
    },
  });

  const likeCommentHandler = (replyId: number, postId: number) => {
    likeCommentMutation.mutate({ replyId, postId });
  };

  const reportComment = async (replyId: number, data: ReportDataInterface) => {
    try {
      await commentReport(replyId, data);
      toast.success('신고가 접수되었어요.', { id: 'commentReportSuccess' });
    } catch (err: unknown) {
      toast.error('이미 신고 처리된 댓글이에요.', { id: 'commentReportFail' });
    }
  };

  const enterChatRoomHandler = async (memberId: number) => {
    const response = await postChatRoom({ memberId });
    if (!response) return;
    navigate(LINK.CHAT);
    openModal({
      modalType: MODAL_TYPES.CHAT,
      modalProps: { url: response?.chatRoomId as number },
    });
    lockScroll();
  };

  return {
    likeComment: likeCommentHandler,
    reportComment,
    enterChatRoom: enterChatRoomHandler,
  };
};

export default useCommentActionHandler;
