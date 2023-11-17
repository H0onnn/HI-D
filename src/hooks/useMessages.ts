import {
  useInfiniteQuery,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
} from '@tanstack/react-query';
import { getMessageList } from '@/services/chat';
import { MessageListInterface } from '@/types/chat';

interface MessagesQueryResponse extends MessageListInterface {
  nextPage: number | null;
}

interface UseMessagesQueryReturnType {
  data: InfiniteData<MessagesQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<MessagesQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
  refetch: () => Promise<QueryObserverResult<InfiniteData<MessagesQueryResponse, unknown>, Error>>;
}

const useMessages = (roomId: number): UseMessagesQueryReturnType => {
  const fetchMessages = async (pageParam = 1) => {
    const response = await getMessageList({
      roomId,
      page: pageParam,
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery<MessagesQueryResponse>({
      queryKey: [QUERY_KEY_MESSAGE, roomId],
      queryFn: ({ pageParam }) => fetchMessages(pageParam as number),
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
      staleTime: STALE_TIME_MESSAGE,
    });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };

  return { data, moreDataHandler, isFetching, refetch };
};

export const QUERY_KEY_MESSAGE = 'Messages';
export const STALE_TIME_MESSAGE = 1000 * 60 * 1; // 1분

export default useMessages;
