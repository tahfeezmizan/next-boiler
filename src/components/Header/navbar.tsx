"use client";

import { Drawer } from "antd";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.png";
import ButtonOne from "../shared/button/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent sticky top-0 z-50 mx-4">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={30}
            className="w-28 h-5"
          />
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base leading-5 text-gray-700 hover:text-black font-medium transition"
            >
              {item.label}
            </Link>
          ))}

          <ButtonOne title="Explore NOw" />
        </div>

        <button className="block md:hidden" onClick={() => setOpen(true)}>
          <Menu className="text-2xl" />
        </button>

        <Drawer
          title="DEVLOP.ME"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-base py-2 text-gray-700 hover:text-black"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonOne title="Start Project" onClick={() => setOpen(false)} />
        </Drawer>
      </div>
    </header>
  );
}
