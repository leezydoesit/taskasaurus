import { z } from 'zod';

const TodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
});
const TodoListSchema = z.array(TodoSchema);

export type Todo = z.infer<typeof TodoSchema>;

export async function getTodoList(): Promise<Todo[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) {
    throw new Error(
      `Failed to fetch todos: ${String(res.status)} ${res.statusText}`,
    );
  }

  const json = (await res.json()) as Todo[];
  return TodoListSchema.parse(json);
}
