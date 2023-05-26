"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../atoms/avatar";
import { signOut } from "next-auth/react";
interface ProfileDropdown {
  avatarUrl: string;
  avatarFallback: string;
}

export const ProfileDropdown = (props:ProfileDropdown) => {
    const {avatarFallback,avatarUrl} = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none select-none">
        <Avatar>
          <AvatarImage src={avatarUrl}/>
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
        <DropdownMenuLabel>Options</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={()=>signOut()}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
