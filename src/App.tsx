import { AppHeader } from '@/components/layout/AppHeader';
import { AppShell } from '@/components/layout/AppShell';
import { EmptyState } from '@/components/feedback/EmptyState';
import { ErrorState } from '@/components/feedback/ErrorState';
import { LoadingState } from '@/components/feedback/LoadingState';
import { TodoList } from '@/features/todos/components/TodoList';
import { useTodos } from '@/features/todos/hooks/useTodos';
import { getErrorMessage } from '@/utils/error';

export default function App() {
  const { todos, isPending, isError, error } = useTodos();

  const content = () => {
    if (isPending) {
      return <LoadingState message="Fetching tasks…" />;
    }

    if (isError) {
      return (
        <ErrorState
          title="Unable to load todos"
          description={getErrorMessage(error)}
        />
      );
    }

    if (todos.length === 0) {
      return <EmptyState message="Nothing to show yet." />;
    }

    return <TodoList todos={todos} />;
  };

  return (
    <AppShell>
      <AppHeader />
      {content()}
    </AppShell>
  );
}
