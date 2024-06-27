import { chakraPetch, kodchasan, righteous } from "../fonts";
import Introduction from "./introduction";
import style from "./profile.module.css";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className={`flex h-[100vh] justify-center`}>
      <div
        className={`${style.profile} ${kodchasan.className} flex flex-col justify-center items-center text-[3.5rem] leading-[4rem] gap-2`}
      >
        <Introduction />
      </div>
    </div>
  );
}
