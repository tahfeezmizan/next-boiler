import Navbar from "@/components/header/navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}
