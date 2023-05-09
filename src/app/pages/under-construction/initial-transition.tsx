"use client";
import { AnimatePresence, motion } from "framer-motion";

const blackBox = {
  initial: {
    height: "100vh",
  },
};

const InitialTransition = () => {
  return (
    <AnimatePresence initial={true}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative z-50 w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        />
      </div>
    </AnimatePresence>
  );
};
export default InitialTransition;
