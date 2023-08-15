import { useQuery } from 'react-query';
import { useBookListsClient } from './useBookListsClient';

export const useBookLists = () => {
  const client = useBookListsClient();
  const { isLoading, error, data } = useQuery<{ title: string }[]>(
    'bookLists',
    client.getAll,
  );

  return {
    data: data ?? [],
    isLoading,
    error: error ? String(error) : undefined,
  };
};
