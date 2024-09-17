import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion"
import { isMobile } from "../scripts/isMobile";
import SideMenuButton from "./SideMenuButton";
import HomeGallery from "./HomeGallery";

/**
 * Component shown on landing page presenting the author and the website.
 * 
 * @returns {ReactNode} A react component showing basic presentation information about author.
 */
const PresentationTitle = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div className="flex flex-col items-start px-[10vw] absolute scroll-smooth justify-center w-screen h-screen ">
      <motion.div style={{ translateY: useTransform(scrollYProgress, [0, 1], [0, -200]), opacity: useTransform(scrollYProgress, [0, 1], [1, 0]) }}
        className="pointer-events-none duration-200 z-20 flex flex-col text-sm sm:text-lg text-[#9f9f9c]"
      >
        <p> hellooo, my name is </p>
        <h1 className="text-[10vw] sm:text-[85px] py-1 text-[#ffffe9]" style={{ lineHeight: 0.9 }}>
          <motion.div style={{ translateX: useTransform(scrollYProgress, [0, 1], [0, -700]) }}>
            ALESSANDRO <br />
          </motion.div>
          <motion.div style={{ translateX: useTransform(scrollYProgress, [0, 1], [0, 700]) }}>
            AMANDONICO <br />
          </motion.div>
        </h1>
        <p>and this is the place where I put all the stuff </p>
        <p>I don&#39;t want to post on social media</p>
      </motion.div>
    </div>
  )
}

/**
 * Homepage main component, it's a container for all the components of the landing page.
 * 
 * @returns {ReactNode} A react component showing all the elements of the homepage.
 */
const Homepage = () => {
  // Used for scrolling animation of the PresentationTitle component
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end center"]
  });

  const [ismobile, setismobile] = useState(false)
  useEffect(() => {
    const res = isMobile()
    setismobile(res)
  }, [])

  return (
    <div className="relative text-[#ffffe9] scroll-smooth" ref={scrollRef} >
      <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 5]) }} className='absolute pointer-events-auto z-20'>
        <SideMenuButton />
      </motion.div>
      <motion.div className="flex absolute flex-row w-full text-base sm:text-lg pointer-events-none justify-between space-x-2 p-3 z-20" style={{ translateX: useTransform(scrollYProgress, [0, 1], [0, 200]), opacity: useTransform(scrollYProgress, [0, 1], [1, 0]) }}>

        <div className="basis-1/3" />

        <div className=" flex-row justify-around basis-2/3 sm:basis-1/3 flex" >
          <>|</>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/stories`} className='pointer-events-auto '>
            diary
          </Link>
          <>|</>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/friends`} className='pointer-events-auto '>
            friends
          </Link>
          <>|</>

        </div>

      </motion.div>
      <PresentationTitle />
      {
        ismobile ?
          <div className="h-[100dvh] bg-transparent" />
          :
          <motion.div className="relative h-[100dvh]  ">

          </motion.div>

      }
      <motion.div className="flex absolute -mt-[10dvh] sm:-mt-16 flex-row w-full text-base sm:text-lg pointer-events-none justify-between space-x-2 p-3 z-20" style={{ translateX: useTransform(scrollYProgress, [0, 1], [0, -200]), opacity: useTransform(scrollYProgress, [0, 1], [1, 0]) }}>
        <div className=" flex-row justify-around basis-2/3 sm:basis-1/3 flex">

          <>|</>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/photos`} className='pointer-events-auto'>
            photos
          </Link>
          <>|</>
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/projects`} className='pointer-events-auto'>
            projects
          </Link>
          <>|</>
        </div>
        <div className=" basis-1/3" />

      </motion.div>

      <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 1.5]), translateY: useTransform(scrollYProgress, [0, 1], [400, -200]) }} className='flex flex-row pointer-events-none w-screen h-screen items-center justify-center'>
        <HomeGallery />
      </motion.div>
    </div>
  );
};


export default Homepage;
