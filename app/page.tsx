import { getTodoListActions } from "@/actions/todo.actions";

import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodoListActions();
  return (
    <main className="container py-4 px-4 mx-auto">
      <AddTodoForm />
      <TodosTable todos={todos} />
    </main>
  );
}
