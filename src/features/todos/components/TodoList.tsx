import { type Todo } from '@/api/todo';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <section className="space-y-3">
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
