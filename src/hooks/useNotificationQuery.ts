import { useQuery } from '@tanstack/react-query';
import { getNotifications } from '@/services/notification';
import { NotificationInterface } from '@/types/notification';

export const QUERY_KEY = 'notifications';

const useNotificationQuery = () => {
  const { data: notifications } = useQuery<NotificationInterface>({
    queryKey: [QUERY_KEY],
    queryFn: getNotifications,
  });

  return {
    notifications,
  };
};

export default useNotificationQuery;
