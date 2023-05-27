"use client";
import React from 'react';
import { Toaster } from 'sonner';

export const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <>
    <Toaster/>
    {children}
    </>
  )
}
