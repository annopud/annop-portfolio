'use client';
import { useEffect, useState } from 'react';
import style from './profile.module.css';
// import { motion } from 'framer-motion';
import clsx from 'clsx';

export default function Introduction() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(() => true);

    return () => {
      setIsMounted(() => false);
    };
  }, []);
  return (
    <>
      <div
        className={clsx(
          'bg-gradient-to-r from-purple-200 via-teal-500 to-yellow-500 bg-clip-text text-center text-purple-100 text-transparent transition-[transform,opacity] duration-500',
          {
            'translate-x-[unset] opacity-100': isMounted,
            'translate-x-[-200px] opacity-0': !isMounted,
          }
        )}
      >
        <span className="">Hi, my name is </span>
        <span className={`font-righteous ${style.name}`}>Annop</span>
      </div>
      <div
        className={clsx(
          'bg-gradient-to-r from-purple-200 via-teal-500 to-yellow-500 bg-clip-text text-center text-purple-100 text-transparent transition-[transform,opacity] duration-500',
          {
            'translate-x-[unset] opacity-100': isMounted,
            'translate-x-[2000px] opacity-0': !isMounted,
          }
        )}
      >
        <span className="">I’m a </span>
        <span className={`font-chakra-petch font-semibold`}>web developer</span>
      </div>
    </>
  );
}
