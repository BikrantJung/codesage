import { MaxWidthWrapper } from "@/components/shared";

import { NewProblemForm } from "@/features/problem/new-problem/new-problem-form";

function ShareJourneyPage() {
  return (
    <div className="pt-8">
      <MaxWidthWrapper>
        <div className="flex">
          {/* Left Side New Post Section */}

          <div className="flex flex-col w-full gap-4">
            <div>
              <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Share your coding journey
              </h2>
              <p className="max-w-md">
                Hi 👋, share your coding problem and your approach to solve it.
                Your solution might help others.
              </p>
            </div>

            <div className="min-h-screen flex w-full items-start gap-4">
              <div className="flex-[3_3_0%] flex flex-col gap-4">
    
                <NewProblemForm />
              </div>
              <div className="flex-1"></div>
            </div>
          </div>

          {/* Right Side Options Section */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default ShareJourneyPage;
