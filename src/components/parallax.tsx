"use client"
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

export const Parallax = () => {
    
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className='flex items-center'>
        <motion.div style={{y}} className="inset-x-0 bg-green-100 w-full h-[100vh] -z-1">Ohio</motion.div>
        <div className='relative z-10 flex items-center justify-center gap-4 py-28'>
            <div className="h-24 w-24 bg-white border-2 border-black"></div>
            <div className="h-24 w-24 bg-white border-2 border-black"></div>
            <div className="h-24 w-24 bg-white border-2 border-black"></div>
        </div>
    </div>
  )
}
