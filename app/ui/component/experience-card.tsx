'use client';

import { useEffect, useRef, useState } from 'react';
import { ExperienceType } from './experience';
import Pillar from './pillar';
import clsx from 'clsx';
// import { useScroll } from "framer-motion";

export default function ExperienceCard({
  experience,
  index,
}: {
  index: number;
  experience: ExperienceType;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const options: {
      root?: Element | Document | null;
      rootMargin?: string;
      threshold: number[];
    } = {
      rootMargin: '0px',
      threshold: [],
    };

    for (let i = 0; i <= 1.0; i += 0.01) {
      options.threshold.push(i);
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const {
          boundingClientRect: { top, bottom },
          rootBounds,
        } = entry;

        const rootHeight = rootBounds?.height || 0;

        const overlapHeightPx =
          Math.min(Math.max(0, bottom), rootHeight) -
          Math.min(Math.max(0, top), rootHeight);

        // Math.min(Math.max(0, 457), 461) - Math.min(Math.max(0, -39), 461);
        // Math.min(457, 461) - Math.min(0, 461);
        // 457 - 0;

        // height - top - (height - bottom) = overlap
        // height - top - height + bottom = overlap
        // -top + bottom = overlap
        // -5 + 25 = 20
        // 0 + 20 = 20
        // -(-5) + 15 = 20 not overlap expected 15
        // -(max(0, -5)) + 15 = 15
        // -(max(0, -25)) + (max(0,-5)) = 0
        // -(max(0, -50)) + (max(0,-25)) = 0
        // -(min(max(0, -50), height)) + min(max(0,-25), height) = 0
        // -(min(max(0, -50), 30)) + min(max(0,-25), 30) = 0
        // -(min(max(0, 30), 30)) + min(max(0,50), 30) = 0
        // -(min(30, 30)) + min(50, 30) = 0
        // -(30) + 30 = 0

        // -(min(max(0, 20), 30)) + min(max(0,40), 30) = 0
        // -(min(20, 30)) + min(40, 30) = 0
        // -(20) + 30 = 0
        // 10

        // -(min(max(0, 40), 30)) + min(max(0,60), 30) = 0
        // -(min(40, 30)) + min(60, 30) = 0
        // -(30) + 30 = 0

        // min(max(0,bottom), height) - min(max(0, top), height) = 0
        // console.log('overlapHeightPx', overlapHeightPx);
        // console.log('entry', entry);
        if (overlapHeightPx > 20) {
          setVisible(() => {
            return true;
          });
        } else {
          setVisible(() => {
            return false;
          });
        }
        // if (entry.intersectionRatio > 0.15) {
        //   setVisible(() => {
        //     console.log(index + " visible");
        //     return true;
        //   });
        // } else if (entry.intersectionRatio < 0.25) {
        //   setVisible(() => {
        //     console.log(index + "invisible");
        //     return true;
        //   });
        // }
      });
    }, options);

    // if (ref.current && index === 1) observer.observe(ref.current);
    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "start start"],
  // });

  // scrollYProgress.on("change", (v) => {
  //   if (index === 1) console.log(`${index} index <<< `, v);
  // });

  return (
    <div ref={ref} className="overflow-x-clip">
      <div
        id={'experience_' + index}
        className={clsx(
          'grid gap-2 rounded-lg border-l-8 border-purple-900 bg-purple-900/10 p-2 pl-0 hover:bg-purple-900/25 sm:grid-cols-12',
          {
            // ['translate-x-[50%] opacity-100 right-[-50%] mr-[-50%]']: true,
            ['translate-x-0 opacity-100']: visible,
            ['translate-x-[50%] opacity-0']: !visible,
          },
          'transition-[transform,opacity] duration-500'
        )}
      >
        <div className={'col-span-4 p-2 text-purple-300'}>
          {experience.date}
        </div>
        <div className="col-span-8 flex flex-col gap-4 p-2">
          <div className="font-bold">{experience.title}</div>

          <ul className="ml-4 list-disc text-purple-100">
            {experience.reponsibilities.map((responsibility, rId) => (
              <li key={'responsibility_' + rId}>{responsibility}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((technology, tId) => (
              <Pillar key={'technology_' + tId}>{technology}</Pillar>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
