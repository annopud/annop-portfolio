'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import navBarStyle from './nav-bar.module.css';

const menuList: {
  name: string;
  href: string;
}[] = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center">
      <div
        className={`mt-2 flex flex-wrap justify-center gap-4 rounded-lg bg-purple-900/25 px-2`}
      >
        {menuList.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className={clsx(
              'flex items-center rounded-lg p-2 shadow-[0px_2px_16px_0px] shadow-purple-900 hover:text-purple-200 hover:shadow-purple-500',
              navBarStyle['motion-underline'],
              {
                [navBarStyle['motion-underline-active']]:
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
