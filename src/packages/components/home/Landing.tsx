import React from "react";
import { MaxWidthWrapper } from "../shared";

const LandingShowcase = dynamic(() => import("./landing-showcase"), {
  ssr: false,
});
// import { LandingShowcase } from "./landing-showcase";
import dynamic from "next/dynamic";
import { Button } from "../atoms/button";
import Link from "next/link";
export const LandingSection = () => {
  return (
    <MaxWidthWrapper className="">
      <main className="relative pt-8 flex flex-col items-center xl:block ">
        <div className="flex relative flex-col items-center text-center xl:items-start xl:text-start gap-4 xl:mt-48 mt:8">
          <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight xl:text-4xl">
            Learn-Solve-Share and Grow
          </h2>
          <p className="max-w-[350px]">
            Share your solution to help others, and get better solutions.
          </p>
          <Link href={'/problems'}>
          <Button>Explore Problems</Button>

          </Link>
        </div>

        <LandingShowcase />
      </main>
    </MaxWidthWrapper>
  );
};
