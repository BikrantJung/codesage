"use client";
import { useState } from "react";

import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";
import { Separator } from "@/components/atoms/separator";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { MailIcon } from "@/components/icons/MailIcon";
import { QuestionMarkIcon } from "@/components/icons/QuestionMarkIcon";
import { signIn } from "next-auth/react";
import { Toaster, toast } from "sonner";
export const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [sendMailClicked, setSendMailClicked] = useState(false);
  const [githubLoginClicked, setGithubLoginClicked] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  return (
    <div className="border-2 rounded-md border-black bg-white px-6 py-12 max-w-sm w-full">
      <Toaster richColors />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!email) {
            toast.error("Please provide an email");
            return;
          }
          setSendMailClicked(true);
          signIn("email", {
            email: email,
            username: "Bikrant Jung 2",
            redirect: false,
          })
            .then((res) => {
              console.log({ res, message: "Sending mail success" });
              toast.success("Login email sent to your mail.");
              setSendMailClicked(false);
            })
            .catch((err) => {
              console.log({ err, from: "SignIN" });
              toast.error("An unexpected error occured. Please try again");
            })
            .finally(() => {
              setSendMailClicked(false);
            });
        }}
        action=""
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor="email">Email address</label>
            <Popover>
              <PopoverTrigger
                type="button"
                className="bg-black text-white rounded-full p-[1px] flex items-center justify-center"
              >
                <QuestionMarkIcon className="text-inherit h-4 w-4" />
              </PopoverTrigger>
              <PopoverContent className="bg-white bg-primary shadow-none p-2 border border-black flex flex-col gap-2">
                <p className="text-sm">
                  New users will be automatically registered once clicked the
                  login link.
                </p>
                <p className="text-sm">
                  Your initial username will be picked from your email address.
                  Eg: <code>johndoe</code> from <code>johndoe@example.com</code>
                  . You can change it later{" "}
                </p>
              </PopoverContent>
            </Popover>
          </div>
          <Input
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <Button
          aria-label="Send login link"
          loading={sendMailClicked}
          type="submit"
        >
          <MailIcon />
          <span>Send me a link</span>
        </Button>
      </form>
      <div className="flex items-center gap-2 my-8">
        <Separator className="flex-1" />
        <p>Or continue with</p>
        <Separator className="flex-1" />
      </div>
      <Button
        loading={githubLoginClicked || redirecting}
        loadingText={
          githubLoginClicked ? "Connecting to Github" : "Redirecting"
        }
        className="w-full"
        onClick={() => {
          setGithubLoginClicked(true);
          signIn("github")
            .then((res) => {
              setGithubLoginClicked(false);
              setRedirecting(true);
            })
            .catch((err) => {
              setRedirecting(false)
              toast.error(
                "Error signing in with Github. Please try again or Report a Bug"
              );
            })
            .finally(() => {
              setGithubLoginClicked(false);
            });
        }}
      >
        <GithubIcon />
        <span>Github</span>
      </Button>
    </div>
  );
};
