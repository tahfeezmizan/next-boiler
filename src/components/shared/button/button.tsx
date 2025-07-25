"use client";

import { cn } from "@/lib/utils";
import { MouseEventHandler, ReactNode } from "react";

type CustomButtonProps = {
  title: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function ButtonOne({ title, icon, onClick }: CustomButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2  border border-black rounded-full px-4 py-2 leading-6 font-normal hover:bg-[#C5FF41] hover:border-white  transition duration-300 ease-in-out"
      )}
    >
      {title}
    </button>
  );
}
