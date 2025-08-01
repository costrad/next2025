"use client";
import { useRouter } from "next/navigation";
import { LogOut, LucideArrowUpRight, ShieldPlusIcon, UserIcon } from "lucide-react";
import { client } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../button";

export function SignInButton() {
  const router = useRouter(); // Use Next.js router

  const {
    data: session, //error object
  } = client.useSession();

  return (
    <>
      {!session ? (
        <div className="flex items-center gap-0 h-7 pr-2">
          <Button
            onClick={() => {
              router.push("/auth/sign-in");
              // close();
            }} // Redirect to the sign-in page
            className="uppercase  bg-secondary dark:hover:bg-black hover:text-background text-secondary cursor-pointer h-full rounded-none "
            size="sm"
            variant="default"
          >
            <span className="text-sm normal-case text-foreground hover:text-white ">
              {session ? "" : "LOGIN/SIGNUP"}
            </span>
          </Button>
          <LucideArrowUpRight className="bg-primary text-secondary aspect-square text-[3em] h-7 w-7" />
        </div>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-start justify-between z-30  ">
              <div className="flex items-center  gap-x-2">
                <div className="pr-2">
                  <Avatar className=" h-10 w-10 sm:flex outline-2 outline-offset-1 outline-accent  ">
                    <AvatarImage
                      src={session?.user.image || "#"}
                      alt="Avatar"
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {session?.user.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid gap-1 ">
                  <p className="text-sm uppercase font-bold  leading-none">
                    {session?.user.name}
                  </p>
                  <p className="text-xs font-ibmplex">{session?.user.email}</p>
                </div>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {session?.user.role === "ADMIN" && (
              <DropdownMenuItem
                onSelect={() => {
                  router.push("/admin");
                }}
                className="cursor-pointer"
              >
                <ShieldPlusIcon />
                <span>Administration</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            )}
            <DropdownMenuGroup className="cursor-pointer">
              <DropdownMenuItem
                onSelect={() => {
                  router.push("/dashboard");
                }}
                className="cursor-pointer"
              >
                <UserIcon />
                <span>Dashboard</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={async () => {
                await client.signOut({
                  fetchOptions: {
                    onSuccess: () => {
                      router.push("/"); // redirect to login page
                    },
                  },
                });
              }}
            >
              <LogOut />
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}
