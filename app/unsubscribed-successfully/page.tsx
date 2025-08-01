import Link from "next/link";
import React from "react";

export default function Unsubscribe() {
  return (
    <main className="flex h-[70dvh] max-h-dvh flex-col items-center justify-center p-4 relative">
      <div className="grid grid-cols-1 text-center gap-4 sm:grid-cols-1 sm:gap-3 lg:grid-cols-1 lg:gap-8 space-y-2">
        <div className="text-center">
          <h1 className="sm:text-4xl  text-2xl font-bold text-gray-900 dark:text-white">
            You’ve been unsubscribed
          </h1>
          <p className="text-lg max-w-xl text-center">
            You’ll no longer receive newsletters from COSTrAD. You can
            re-subscribe anytime via our website.
          </p>
          <h1 className="sm:text-4xl  text-2xl font-bold text-gray-900 dark:text-white">
            Thank you!
          </h1>
        </div>
        <div>
          <p className="text-sm wrap-break-word text-center ">
            <Link href="email:info@costrad.org">info@costrad.org</Link>,{" "}
            <Link href="email:webmaster@costrad.org">
              webmaster@costrad.org
            </Link>
            , <Link href="tel: +233200201334">+233 20 020 1334</Link>
          </p>
        </div>
      </div>
    </main>
  );
}
