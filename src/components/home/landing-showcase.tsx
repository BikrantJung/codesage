"use client";
import Image from "next/image";
import { Separator } from "../atoms/separator";
import { Highlight } from "../shared/syntax-highlighter";
import { motion, useScroll, useTransform } from "framer-motion";
const LandingShowcase = () => {
  const codeBlock = `<div class="parent">
    <div class="children">
    </div>
    </div>`;
  const cssBlock = `.parent {position: relative;}.children{position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);}`;
  const solution1 = `.parent {display:grid; place-items:center; }`;
  const solution2 = `.parent {display:flex; align-items:center; justify-content:center; }`;

  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <motion.div className="md:h-[28rem] h-auto py-4 px-2 w-80 rounded apply-border apply-shadow outline-gray-400 bg-white  relative xl:absolute xl:right-48 top-8">
      <div className="flex flex-col relative">
        <div className="flex gap-2 items-center p-2">
          <Image
            src="avatars/avatar-1.svg"
            alt="Avatar"
            width={24}
            height={24}
          />
          <p className="text-xs">
            Finally, I managed to center a div. Here&apos;s my approach.
          </p>
        </div>
        <Separator className="my-2" />
        <p className="text-xs">HTML: </p>
        <Highlight codeString={codeBlock} language="html" parser="html" />
        <p className="text-xs mt-3">CSS: </p>
        <Highlight codeString={cssBlock} language="css" parser="css" />

        {/* Small screen Solutions */}

        <div className="flex md:hidden flex-col bg-primary p-2 mt-2 gap-2 rounded">
          <div className="flex bg-white relative p-2 px-4 rounded flex-col gap-1 border border-black">
            <div className="flex items-center gap-2">
              <Image
                src="avatars/avatar-2.svg"
                alt="Avatar"
                width={24}
                height={24}
              />
              <p className="text-xs">Great Job! Keep going. Try this out.</p>
            </div>
            <Separator className="my-1" />
            <Highlight codeString={solution2} language="css" parser="css" />
          </div>
          <Separator className="my-1" />
          <div className="flex bg-white relative p-2 px-4 rounded flex-col gap-1 -2 border border-black">
            <div className="flex items-center gap-2">
              <Image
                src="avatars/avatar-3.svg"
                alt="Avatar"
                width={24}
                height={24}
              />
              <p className="text-xs">You can also use gird on parent.</p>
            </div>
            <Separator className="my-1" />
            <Highlight codeString={solution1} language="css" parser="css" />
          </div>
        
        </div>

        {/* Only visible on 'md' size screens */}
        {/* Solution 1 */}
        <div className="hidden md:block top-24 right-16 translate-x-full absolute pl-3">
          <div className="flex bg-white relative p-2 px-4 rounded flex-col gap-1 border-2 border-black">
            <div className="flex items-center gap-2">
              <Image
                src="avatars/avatar-2.svg"
                alt="Avatar"
                width={24}
                height={24}
              />
              <p className="text-xs">Great Job! Keep going. Try this out.</p>
            </div>
            <Separator className="my-1" />
            <Highlight codeString={solution2} language="css" parser="css" />
          </div>
        </div>
        {/* Solution 2 */}
        <div className="hidden md:block bottom-0 left-0 -translate-x-full absolute pr-[2px]">
          <div className="flex bg-white relative p-2 px-4 rounded flex-col gap-1 border-2 border-black">
            <div className="flex items-center gap-2">
              <Image
                src="avatars/avatar-3.svg"
                alt="Avatar"
                width={24}
                height={24}
              />
              <p className="text-xs">You can also use gird on parent.</p>
            </div>
            <Separator className="my-1" />
            <Highlight codeString={solution1} language="css" parser="css" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default LandingShowcase;
