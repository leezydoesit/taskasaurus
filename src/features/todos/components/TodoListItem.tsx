import { type Todo } from '@/api/todo';

interface TodoListItemProps {
  todo: Todo;
}

export function TodoListItem({ todo }: TodoListItemProps) {
  return (
    <li className="flex items-start justify-between gap-3 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-3">
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-100">{todo.title}</p>
        <p className="text-xs text-slate-400">Task #{todo.id}</p>
      </div>
      <span
        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${
          todo.completed
            ? 'bg-emerald-500/15 text-emerald-300'
            : 'bg-amber-500/15 text-amber-200'
        }`}
      >
        {todo.completed ? 'Done' : 'Pending'}
      </span>
    </li>
  );
}
