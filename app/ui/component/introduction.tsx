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
        className={clsx('transition-all-ease-in-out text-center duration-500', {
          'translate-x-[unset] opacity-100': isMounted,
          'translate-x-[-200px] opacity-0': !isMounted,
        })}
      >
        Hi, my name is{' '}
        <span className={`font-righteous ${style.name}`}>Annop</span>
      </div>
      <div
        className={clsx('transition-all-ease-in-out text-center duration-500', {
          'translate-x-[unset] opacity-100': isMounted,
          'translate-x-[200px] opacity-0': !isMounted,
        })}
      >
        I’m a{' '}
        <span className={`font-chakra-petch font-semibold`}>web developer</span>
      </div>
    </>
  );
}
