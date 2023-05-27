import Form from "@/components/todo/Form";
import List from "@/components/todo/List";
import { getTodos } from "@/lib/prisma/todo";

export const dynamic = "true";

export default async function Home() {
  const { todos } = await getTodos();

  return (
    <>
      <Form />
      <List todos={todos} />
    </>
  );
}
