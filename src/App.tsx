import './App.css';
import { useQuery } from '@tanstack/react-query';
import { getTodoList, Todo } from '@/api/todo';

export default function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodoList,
  });

  if (isLoading) return <p className="p-6">Loading…</p>;

  if (isError) {
    const message = error.cause
      ? 'Data validation failed (Zod).'
      : error.message;
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="font-medium text-red-700">Error</p>
          <p className="text-sm text-red-700/90">{message}</p>
          {'issues' in error && (
            <details className="mt-2 text-xs text-red-700/80">
              <summary>Details</summary>
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(error.issues, null, 2)}
              </pre>
            </details>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold text-gray-800">Todos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data?.slice(0, 16).map((todo: Todo) => (
          <article
            key={todo.id}
            className="rounded-xl border bg-white shadow-sm p-4 flex flex-col justify-between"
          >
            <header className="mb-3">
              <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2">
                {todo.title}
              </h3>
              <p className="text-xs text-gray-500">ID: {todo.id}</p>
            </header>

            <footer className="flex items-center justify-between">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  todo.completed
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {todo.completed ? 'Done' : 'Pending'}
              </span>
              <button
                type="button"
                className="text-xs underline decoration-dotted"
              >
                Details
              </button>
            </footer>
          </article>
        ))}
      </div>
    </div>
  );
}
