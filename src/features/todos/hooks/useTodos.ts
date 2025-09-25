import { useQuery } from '@tanstack/react-query';
import { getTodoList, type Todo } from '@/api/todo';

export function useTodos() {
  const { data, isPending, isError, error } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: getTodoList,
    staleTime: 30_000,
  });

  return {
    todos: data ?? [],
    isPending,
    isError,
    error,
  };
}
