'use server'

import { ITodo } from "@/interface";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";


const prisma = new PrismaClient();

export const getTodoListActions = async ({ userId }: { userId: string | null }): Promise<Array<ITodo>> => {
  try {
    return await prisma.todo.findMany({
      where: {
        userId: userId as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    throw new Error("Something went wrong" + error);
  }
};



export const createTodoActions = async ({
  title,
  body,
  completed,
  userId,
}: {
  title: string;
  body?: string | undefined;
  completed: boolean;
  userId: string | null;
}): Promise<void> => {
  try {
    await prisma.todo.create({
      data: {
        title,
        body,
        completed,
        userId: userId as string,
      },
    });

    revalidatePath("/");
  } catch (error) {
    throw new Error("Something went wrong" + error);
  }
};


export const deleteTodoActions = async ({id} : {id: string}) => {
  await prisma.todo.delete({
    where: {
      id
    }
  });

  revalidatePath("/");
}
export const updateTodoActions = async ({id, title, body, completed}: ITodo) => {
  await prisma.todo.update({
    where: {
      id
    },
    data: {
      title,
      body,
      completed
    }
  });

  revalidatePath("/");
}
