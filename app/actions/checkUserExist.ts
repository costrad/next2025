// app/actions/checkUserExist.ts
"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkUserExist = async (email: string) => {

  // Query for the user by email only (assuming email is unique)
  const user = await prisma.user.findUnique({
    where: { email },
  });

  return user; // Returns the user record or null if not found.
};
