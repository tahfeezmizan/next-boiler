"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={50}
            className="w-44 h-10"
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

          <button className="flex items-center gap-2  border rounded-full pr-5 py-2 leading-6 font-normal">
            <span className="border rounded-full p-2 flex flex-col items-center justify-center ">
              <ArrowRightOutlined className="text-black size-4" />
            </span>
            Start Project
          </button>
        </div>

        <button className="block md:hidden" onClick={() => setOpen(true)}>
          <MenuOutlined />
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

          <Button
            type="default"
            icon={<ArrowRightOutlined />}
            className="mt-6 w-full border-gray-400 hover:border-black rounded-full font-medium"
            onClick={() => setOpen(false)}
          >
            Start Project
          </Button>
        </Drawer>
      </div>
    </header>
  );
}
