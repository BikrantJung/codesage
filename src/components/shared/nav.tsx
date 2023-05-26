"use client";
import { restrictedNavbar } from "@/lib/constants";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/button";
import { Logo } from "../atoms/logo";
import { MaxWidthWrapper } from "./max-width-wrapper";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { ProfileDropdown } from "./profile-dropdown";
interface NavProps {
  user: Session | null;
}

export const Nav = ({ user }: NavProps) => {
  const pathname = usePathname();

  if (restrictedNavbar.includes(pathname)) return null;
  return (
    <div className="border-b border-black py-4">
      <MaxWidthWrapper>
        <div className="flex items-center">
          <Logo />
          <div className="gap-2 ml-auto hidden lg:flex">
            <Link href='/about-us'>About us</Link>
          </div>
          <div className="flex gap-2 ml-auto">
            {user ? (
              <div className="flex items-center gap-3">
                <ProfileDropdown avatarUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" avatarFallback="BI"/>
                <Link href={"/share/journey"}>
                <Button className="hidden md:inline-flex">Share your journey</Button>
                <Button className="md:hidden">Share</Button>
                </Link>
              </div>
            ) : (
              <Link href={"/login"}>
                <Button className="hidden md:inline-flex">Share your journey</Button>
                <Button className="md:hidden">Share</Button>
              </Link>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
