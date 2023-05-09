import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>test</div>
      <Component {...pageProps} />
    </>
  );
}
/*
const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <AnimatePresence exitBeforeEnter>
      <div>hiii</div>
      <motion.div 
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0
          },
          animateState: {
            opacity: 1
          },
          exitState: {
          }
        }}
      >
        <Component {...pageProps} />
        </motion.div>
    </AnimatePresence>
  )
}
export default MyApp*/
