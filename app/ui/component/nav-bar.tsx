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
        className={`mt-2 flex gap-4 rounded-lg border-[1px] border-white bg-purple-900 bg-opacity-25 px-2 flex-wrap justify-center`}
      >
        {menuList.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className={clsx(
              'p-2',
              'flex items-center rounded-lg hover:bg-purple-700',
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
