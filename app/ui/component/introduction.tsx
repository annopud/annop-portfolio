"use client";
import { chakraPetch } from "../fonts";
import style from "./profile.module.css";
import { motion } from "framer-motion";

export default function Introduction() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: -200 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
      >
        Hi, my name is{" "}
        <span className={`font-righteous ${style.name}`}>Annop</span>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        }}
      >
        I’m a{" "}
        <span className={`${chakraPetch.className} font-semibold`}>
          web developer
        </span>
      </motion.div>
    </>
  );
}
