"use client";

import React, { useState } from "react";
import Spinner from "./Spinner";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { deleteTodoActions } from "@/actions/todo.actions";
import EditTodoForm from "./EditTodoForm";
import { Todo } from "@prisma/client";

export default function TodoTableActions({ todo }: { todo: Todo }) {
  // handel Delete
  const onDelete = async (id: string) => {
    setLoading(true);
    await deleteTodoActions({ id });
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  return (
    <>
      <EditTodoForm todo={todo} />
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => onDelete(todo.id)}
      >
        {loading ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
}
