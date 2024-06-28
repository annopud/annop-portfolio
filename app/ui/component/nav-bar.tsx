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

export default function NavBar({ className = '' }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        // 'flex justify-center bg-purple-950/90',
        'flex justify-center bg-purple-950 shadow-[0px_2px_16px_0px] shadow-purple-500',
        className
      )}
    >
      <div className={`flex flex-wrap justify-center gap-4 rounded-lg px-2`}>
        {menuList.map((menu) => (
          <Link
            key={menu.name}
            href={menu.href}
            className={clsx(
              'relative flex items-center rounded-lg p-2 hover:text-purple-200',
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
