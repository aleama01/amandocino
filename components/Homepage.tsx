'use client';

import Link from "next/link";
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, useScroll, AnimatePresence, useTransform, useAnimation } from "framer-motion"
import { useRouter } from 'next/navigation';
import { isMobile } from "../scripts/isMobile";
import { useTransition } from './TransitionProvider';
import SideMenuButton from "./SideMenuButton";
import Image from "next/image";
import { Context } from "../Context";

export const springTransition = {
  type: "spring" as const, // Type assertion to make it a literal type
  stiffness: 100,         // Replace duration with stiffness
  mass: 0.5,             // Add mass for spring physics
  damping: 15,
  bounce: 0.1,
  delay: 0.2,
  exit: {
    delay: 0,
    stiffness: 100,
    damping: 15
  }
}

const Homepage = () => {
  const { showContent, mobile } = useContext(Context)

  if (mobile) {
    return (
      <div className="h-[100dvh] w-[100dvw]">
        <AnimatePresence>
          {showContent &&
            <div className="relative h-[100dvh] w-[100dvw]">
              <motion.div
                initial={{ opacity: 0, left: "-5vw", y: "190px", scale: 0 }}
                animate={{ opacity: 1, left: "-5vw", y: "190px", scale: 1 }}
                exit={{ opacity: 0, left: "-5vw", y: "190px", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center  w-[120px] h-[120px]"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/spring.png" alt="spring image" width={120} height={120} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: "-10px", bottom: "40px", scale: 0 }}
                animate={{ opacity: 1, right: "-10px", bottom: "40px", scale: 1 }}
                exit={{ opacity: 0, right: "-10px", bottom: "40px", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center w-[150px] h-[150px]"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/flower.png" alt="flower image" width={150} height={150} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, left: "-40px", bottom: "90px", scale: 0 }}
                animate={{ opacity: 1, left: "-40px", bottom: "90px", scale: 1 }}
                exit={{ opacity: 0, left: "-40px", bottom: "90px", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center w-[140px] h-[140px]"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/points_small.png" alt="points image" width={140} height={140} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, left: "40vw", top: "9vh", scale: 0 }}
                animate={{ opacity: 1, left: "40vw", top: "9vh", scale: 1 }}
                exit={{ opacity: 0, left: "40vw", top: "9vh", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center w-[110px] h-[110px]"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/star.png" alt="star image" width={110} height={110} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, right: "-10px", top: "25vh", scale: 0 }}
                animate={{ opacity: 1, right: "-10px", top: "25vh", scale: 1 }}
                exit={{ opacity: 0, right: "-10px", top: "25vh", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center w-[130px] h-[130px]"
                style={{ willChange: 'transform, opacity' }}>
                <Image src="/drawings/crown.png" alt="crown image" width={130} height={130} style={{ rotate: "10deg" }} />

              </motion.div>
            </div>
          }
        </AnimatePresence>
      </div>
    );
  } else {
    return (
      <div className="h-[100dvh] w-[100dvw] relative">
        <AnimatePresence>
          {showContent &&
            <>
              <motion.div
                initial={{ opacity: 0, x: "10vw", y: "20px", scale: 0 }}
                animate={{ opacity: 1, x: "10vw", y: "20px", scale: 1 }}
                exit={{ opacity: 0, x: "10vw", y: "20px", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/spring.png" alt="spring" width={400} height={400} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "70vw", y: "60vh", scale: 0 }}
                animate={{ opacity: 1, x: "70vw", y: "60vh", scale: 1 }}
                exit={{ opacity: 0, x: "70vw", y: "60vh", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/flower.png" alt="spring" width={400} height={400} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "0", y: "50vh", scale: 0 }}
                animate={{ opacity: 1, x: "0", y: "50vh", scale: 1 }}
                exit={{ opacity: 0, x: "0", y: "50vh", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/points_small.png" alt="spring" width={400} height={400} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "30vw", y: "70vh", scale: 0 }}
                animate={{ opacity: 1, x: "30vw", y: "70vh", scale: 1 }}
                exit={{ opacity: 0, x: "30vw", y: "70vh", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}
              >
                <Image src="/drawings/star.png" alt="spring" width={400} height={400} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: "65vw", y: "10px", scale: 0 }}
                animate={{ opacity: 1, x: "65vw", y: "10px", scale: 1 }}
                exit={{ opacity: 0, x: "65vw", y: "10px", scale: 0 }}
                transition={springTransition}
                className="absolute z-10 flex flex-col items-center justify-center"
                style={{ willChange: 'transform, opacity' }}>
                <Image src="/drawings/crown.png" alt="spring" width={400} height={400} />

              </motion.div>
            </>}
        </ AnimatePresence >
      </div>
    )
  }

};

export default Homepage;
