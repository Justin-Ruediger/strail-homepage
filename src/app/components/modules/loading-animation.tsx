"use client";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.scss";

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 0.8,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function LoadingAnimation() {
  return (
    <motion.div
      className={styles.overlay}
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className={styles.svg}>
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className={styles.rect} />
          <motion.rect variants={text} className={styles.rext2} />
        </pattern>
        <text
          className={styles.text}
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          Strail.dev
        </text>
      </motion.svg>
    </motion.div>
  );
}

export default LoadingAnimation;
