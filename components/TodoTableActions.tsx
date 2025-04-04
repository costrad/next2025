"use client";

import React, { useState } from "react";
import Spinner from "./Spinner";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Pen } from "lucide-react";
import { deleteTodoActions } from "@/actions/todo.actions";

export default function TodoTableActions({ id }: { id: string }) {
  // handel Delete
  const onDelete = async (id: string) => {
    setLoading(true);
    await deleteTodoActions({ id });
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);
  return (
    <>
      <Button size={"icon"}>
        <Pen />
      </Button>
      <Button
        size={"icon"}
        variant={"destructive"}
        onClick={() => onDelete(id)}
      >
        {loading ? <Spinner /> : <Trash />}
      </Button>
    </>
  );
}
