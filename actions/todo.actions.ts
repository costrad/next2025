'use server'

import { TodoFormSchema } from "@/schema";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();

export const getTodoListActions = async () => {
  return await prisma.todo.findMany({
    orderBy: {
      createdAt: "desc"
    }
  })

  // Error Handling
  
}
export const createTodoActions = async ({ title, body, completed }: TodoFormSchema) => {
  await prisma.todo.create({
    data: {
      title,
      body,
      completed
    }
  });

  revalidatePath("/");
}
export const deleteTodoActions = async ({id} : {id: string}) => {
  await prisma.todo.delete({
    where: {
      id
    }
  });

  revalidatePath("/");
}
export const updateTodoActions = async () => {}
