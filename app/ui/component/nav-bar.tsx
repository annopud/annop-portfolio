"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";
import navBarStyle from "./nav-bar.module.css";

const menuList: {
  name: string;
  href: string;
}[] = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
];
const MotionLink = motion(Link);
export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <div
        className={`flex gap-4 px-2 rounded-lg bg-purple-900 bg-opacity-25 mt-2 border-white border-[1px]`}
      >
        {menuList.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className={clsx(
              "p-2",
              "hover:bg-purple-700 rounded-lg flex items-center",
              navBarStyle["motion-underline"],
              {
                [navBarStyle["motion-underline-active"]]:
                  pathname === menu.href,
              }
            )}
          >
            {menu.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
