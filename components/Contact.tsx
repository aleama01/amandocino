import React, { useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Context } from '../Context';

const ContactModal = ({ handleClick }: { handleClick: any }) => {
  return (
    <div className='flex flex-row items-start p-6 bg-[#101411] w-full lg:w-[400px]'>
      <button aria-label='Close side menu' className='font-thin text-2xl'
        onClick={handleClick}>
        x
      </button>
      <ul className='flex flex-col justify-center flex-wrap gap-2 pt-2 pl-10 '>
        <li>
          <a target="_blank" rel="noreferrer" href='https://www.instagram.com/alessandro_amandonico/' className="text-[#EDF0D8]  flex flex-row items-center">
            <span className='font-medium mr-1'>Instagram: </span> @alessandro_amandonico
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href='https://github.com/aleama01' className="text-[#EDF0D8]  flex flex-row items-center">
            <span className='font-medium mr-1'>Github: </span> aleama01
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alessandro-amandonico/' className="text-[#EDF0D8]  flex flex-row items-center">
            <span className='font-medium mr-1'>Linkedin: </span> alessandro-amandonico
          </a>
        </li>
        <li className='mt-2'>
          Feel free to connect and contact me! : )
        </li>
      </ul>
    </div>
  )
}

const Contact = () => {
  let pathname = usePathname()
  const [openContactModal, setOpenContactModal] = useState(false)
  const { mobile, setOpenSideMenu, showContent } = useContext(Context)


  let animation = { right: "2vw" }
  let animationModal = { right: "0vw" }
  console.log(showContent)

  if (showContent.split("/")[0] === "diary" || showContent === "diaryslug") {
    animation = { right: "57vw" }
    animationModal = { right: "55vw" }
  }

  const handleClick = () => {
    setOpenSideMenu(false)
    setOpenContactModal(!openContactModal)
  }

  if (mobile) {
    return (
      <>
        <motion.h2
          initial={{ left: "-10vw" }}
          animate={{ left: "2vw" }}
          exit={{ left: "-10vw" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className='fixed pointer-events-auto top-[5dvh] left-[2vw] w-[120px] font-medium z-10'
          style={{ willChange: "left" }}
        >
          <button onClick={handleClick}>[<span className="mx-2 uppercase">CONTACT</span>]</button>
        </motion.h2>
        <AnimatePresence>

          {openContactModal && (
            <motion.div
              initial={{ ...animationModal, top: "-200px" }}
              animate={{ ...animationModal, top: "0" }}
              exit={{ ...animationModal, top: "-200px" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='fixed top-0 left-0 z-50'
              style={{ willChange: "left,top" }}
            >
              <ContactModal handleClick={handleClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  } else {

    return (
      <>
        <motion.h2
          initial={{ right: "-10vw" }}
          animate={animation}
          exit={{ right: "-10vw" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className='fixed pointer-events-auto top-[5dvh] right-[2vw] font-medium z-50'
          style={{ willChange: "right" }}
        >
          <button onClick={handleClick}>[<span className="mx-2 uppercase">CONTACT</span>]</button>
        </motion.h2>
        <AnimatePresence>

          {openContactModal && (
            <motion.div
              initial={{ ...animationModal, top: "-200px" }}
              animate={{ ...animationModal, top: "0" }}
              exit={{ ...animationModal, top: "-200px" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='fixed top-0 right-0 z-50'
              style={{ willChange: "right,top" }}
            >
              <ContactModal handleClick={handleClick} />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    )
  }
}

export default Contact