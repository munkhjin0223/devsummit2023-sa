import { getTodos } from "@/lib/prisma/todo";

export default async function Home() {
  const { todos } = await getTodos();

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-center">
          {todo.text}
        </div>
      ))}
    </>
  );
}
