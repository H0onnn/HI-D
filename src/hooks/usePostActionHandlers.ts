import usePostActionState from './usePostActionState';
import { useNavigate } from 'react-router-dom';
import { postLike, postBookmark, postDelete } from '@/api/services/postActions';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';

const usePostActionHandlers = () => {
  const { toggleBookmark, toggleLike } = usePostActionState();
  const navigate = useNavigate();

  const likePost = async (postId: number) => {
    toggleLike();
    await postLike(postId);
  };

  const bookmarkPost = async (postId: number) => {
    toggleBookmark();
    await postBookmark(postId);
  };

  const deletePost = async (postId: number) => {
    try {
      if (window.confirm('해당 게시글을 삭제하시겠습니까?')) {
        await postDelete(postId);
        navigate(LINK.MAIN);
        toast.success('게시글이 삭제되었습니다.', { id: 'postDeleteSuccess' });
      }
    } catch (err: unknown) {
      console.error('게시글 삭제 오류 : ', err);
      toast.error('게시글 삭제 중 오류가 발생했습니다.', { id: 'postDeleteFail' });
    }
  };

  return {
    likePost,
    bookmarkPost,
    deletePost,
  };
};

export default usePostActionHandlers;
