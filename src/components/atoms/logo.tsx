import Image from "next/image";
import Link from "next/link";
import React from "react";
interface LogoProps {
  height?: number;
  width?: number;
  className?: string;
}
export const Logo = (props: LogoProps) => {
  const { height = 16, width = 180, className } = props;
  return (
    <Link href="/" className="no-underline hover:no-underline">
      <Image
        width={width}
        height={height}
        className={className}
        alt="logo"
        src="/logo.svg"
        
      />
    </Link>
  );
};
