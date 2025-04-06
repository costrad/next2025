import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <nav className="my-10 mx-auto container flex items-center justify-between">
      <ModeToggle />
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </nav>
  );
}
