import { motion } from "framer-motion";

import s from "./Hamburger.module.css";

const line1Animate = (showNav: boolean) => {
  return {
    x2: 28,
    opacity: 1,
    rotate: showNav ? "45deg" : 0,
    stroke: showNav ? "#fff" : "#272a2c",
  };
};

const line2Animate = (showNav: boolean) => {
  return {
    x2: showNav ? 28 : 16,
    opacity: 1,
    rotate: showNav ? "-45deg" : 0,
    stroke: showNav ? "#fff" : "#272a2c",
  };
};

type HamburgerProps = {
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ showNav, setShowNav }: HamburgerProps) => {
  return (
    <div className={s.hamburger} onClick={() => setShowNav(!showNav)}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.line
          y1="9"
          x2="29"
          y2="9"
          stroke="#272a2c"
          strokeWidth="3"
          initial={{
            x2: 0,
            opacity: 0,
          }}
          animate={line1Animate(showNav)}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: 0,
          }}
          style={{
            originX: "27%",
            originY: "48%",
          }}
        />
        <motion.line
          y1="18"
          x2="16"
          y2="18"
          stroke="#272a2c"
          strokeWidth="3"
          initial={{
            x2: 0,
            opacity: 0,
          }}
          animate={line2Animate(showNav)}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          style={{
            originX: "27%",
            originY: "56%",
          }}
        />
      </svg>
    </div>
  );
};

export default Hamburger;
