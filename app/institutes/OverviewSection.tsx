"use client";
import SeperatorWithText from "@/components/ui/seperatorWithText";
import { baseUrl } from "@/lib/metadata";
import { InstituteWithEditions } from "@/types/institute";
import Image from "next/image";
import React from "react";
import { Edition } from "@prisma/client";
import { useDialog } from "@/providers/DialogProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

export default function OverviewSection({
  institute,
  edition,
}: {
  institute: InstituteWithEditions;
  edition: Edition | null;
}) {
  // dialog provider
  // const { open } = useDialog();
  const router = useRouter();

  const formattedStartDate = edition?.startDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(edition?.startDate))
    : "Coming Soon";
  const formattedEndDate = edition?.endDate
    ? new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(new Date(edition?.endDate))
    : "";
  return (
    <section id="about-section" className="max-w-8xl sm:px-2   mx-auto h-auto">
      <div className="flex flex-col lg:flex-row lg:max-w-none lg:mx-0 max-w-2xl mx-auto sm:ring-1 sm:ring-gray-200 sm:rounded-3xl sm:dark:ring-gray-700">
        <div
          id="introduction"
          className="order-2 lg:order-1 sm:p-10 md:p-8 lg:flex-auto space-y-4 p-2"
        >
          <h1 className=" tracking-tight pt-20 sm:pt-5 ">{institute.name}</h1>
          <div className="mt-3 h-0.5 w-9 rounded-full bg-primary" />
          <h4 className="text-firefly">Introduction</h4>
          <div
            className=" text-sm sm:text-lg pb-5 font-opensans sm:text-justify"
            dangerouslySetInnerHTML={{ __html: institute.about || "" }}
          />
          <div className="  items-center gap-x-4 py-6 hidden">
            <h4 className="flex-none text-sm font-semibold leading-6 text-firefly-600 dark:text-firefly-400">
              What’s included
            </h4>
            <div className="h-px flex-auto bg-gray-100 dark:bg-gray-600" />
          </div>
          <ul
            role="list"
            className="mt-3 grid grid-cols-1 gap-2 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:grid-cols-2"
          ></ul>
        </div>

        <div
          id="action-card"
          className="order-1 lg:order-2 -mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0"
        >
          <div className="rounded-2xl bg-gray-300/30 dark:bg-blue-900/10 h-auto md:h-full py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            {/* edition institute logo */}
            <div className="flex justify-center py-3">
              <Image
                src={`/${institute.logo}` || "/images/logos/costrad.webp"}
                alt={institute.name}
                width={128} // 32 * 4 (Tailwind's `h-32` is 128px)
                height={128}
                className="h-20 w-20 rounded-full object-cover"
              />
            </div>
            <div className="text-foreground text-xl py-2 ">
              {institute?.editions[0] ? institute?.editions[0].title : " "}{" "}
            </div>

            {institute.acronym?.toLowerCase() === "costrad" ? (
              <div className="mx-auto max-w-xs px-8">
                <Card
                  className=" bg-lime-500 text-white font-bold p-2 text-center w-full
                border rounded-none "
                >
                  Specially Subsidized by the President.
                </Card>

                <div>
                  <div className="">
                    <div className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-xl line-through font-bold tracking-tight text-muted-foreground">
                        $1,800.00
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </div>
                    <div className=" flex items-baseline justify-center gap-x-2">
                      <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        ${institute.editions[0]?.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </div>
                  </div>
                  <SeperatorWithText seperatorText={"In Person"} />
                </div>

                <div>
                  {" "}
                  <div className="">
                    <div className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-xl line-through font-bold tracking-tight text-muted-foreground">
                        $800.00
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </div>
                    <div className=" flex items-baseline justify-center gap-x-2">
                      <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        ${institute.editions[0]?.priceViaZoom}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </div>
                  </div>
                  <SeperatorWithText seperatorText={"Via Zoom"} />
                </div>

                <div>
                  <div className="">
                    <div className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-xl line-through font-bold tracking-tight text-muted-foreground">
                        $500.00
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </div>
                    <div className=" flex items-baseline justify-center gap-x-2">
                      <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        $300.00
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </div>
                  </div>
                  <SeperatorWithText seperatorText={"Per Week"} />
                </div>
                <div className="text-center w-auto py-5">
                  <Link
                    href={"/apply"}
                    type="button"
                    className="cursor-pointer w-auto px-4 py-2 bg-firefly-600 text-white leading-tight uppercase rounded shadow-md hover:bg-firefly-700 hover:shadow-lg focus:bg-firefly-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-firefly-800 active:shadow-lg bg-lime-500 hover:bg-lime-600 transition duration-300 ease-in-out text-firefly-900 hover:text-white text-sm"
                    data-hs-overlay="#hs-subscription-with-image"
                  >
                    Start Application
                  </Link>
                </div>

                <div className="flex w-full items-center justify-center text-xs md:text-lg tracking-tighter">
                  <span className="text-[11px] sm:text-sm font-bold uppercase">
                    {formattedStartDate.toUpperCase()}
                    {institute.editions[0]?.endDate && (
                      <>
                        &nbsp;<span className="text-primary">&mdash;</span>
                        &nbsp;
                        {formattedEndDate.toUpperCase()}
                      </>
                    )}
                  </span>
                </div>

                <p className="mt-6 text-xs leading-5 dark:text-gray-400">
                  Gain knowledge that lasts a lifetime. Invoices and receipts
                  available for easy company reimbursement.
                </p>
              </div>
            ) : (
              <div className="mx-auto max-w-xs px-8">
                {/* <p className="text-base font-bold text-gray-600 dark:text-gray-500">
                  Pay once &mdash; Own it forever
                </p> */}

                {/* display only if inPersonDelivery is true and price is not null */}
                {edition?.inPersonDelivery && edition?.price && (
                  <div>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        ${edition?.price}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </p>
                    <SeperatorWithText seperatorText={"In Person"} />
                  </div>
                )}

                {/* display priceViaZoom only if onlineDelivery is true and priceViaZoom is not null */}
                {edition?.onlineDelivery && edition?.priceViaZoom && (
                  <div>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                      <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                        ${edition?.priceViaZoom}
                      </span>
                      <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600 dark:text-gray-400">
                        USD
                      </span>
                    </p>
                    <SeperatorWithText seperatorText={"Via Zoom"} />
                  </div>
                )}

                <div className="text-center w-auto py-5">
                  <button
                    onClick={() => router.push("/apply")}
                    type="button"
                    className="cursor-pointer w-auto px-4 py-2 bg-firefly-600 text-white leading-tight uppercase rounded shadow-md hover:bg-firefly-700 hover:shadow-lg focus:bg-firefly-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-firefly-800 active:shadow-lg bg-lime-500 hover:bg-lime-600 transition duration-300 ease-in-out text-firefly-900 hover:text-white text-sm"
                    data-hs-overlay="#hs-subscription-with-image"
                  >
                    Start Application
                  </button>
                </div>

                <div className="flex w-full items-center justify-center text-xs md:text-lg tracking-tighter">
                  <span className="text-[11px] sm:text-sm font-bold uppercase">
                    {formattedStartDate.toUpperCase()}
                    {institute.editions[0]?.endDate && (
                      <>
                        &nbsp;<span className="text-primary">&mdash;</span>
                        &nbsp;
                        {formattedEndDate.toUpperCase()}
                      </>
                    )}
                  </span>
                </div>

                <p className="mt-6 text-xs leading-5 dark:text-gray-400">
                  Gain knowledge that lasts a lifetime. Invoices and receipts
                  available for easy company reimbursement.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
