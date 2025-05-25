import React, { useContext, useState } from 'react'
import { Context } from '../Context';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { MdClose } from 'react-icons/md';

const ContactModal = ({ handleClick }: { handleClick: any }) => {
  return (
    <div className='flex flex-row items-start p-6 bg-[#101411] w-[400px]'>
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
  let animation = { right: "2vw" }
  let animationModal = { right: "0vw" }
  if (pathname.split('/')[2] === "diary") {
    animation = { right: "57vw" }
    animationModal = { right: "55vw" }
  }

  const handleClick = () => {
    setOpenContactModal(!openContactModal)
  }

  return (
    <AnimatePresence>
      <motion.h2
        initial={{ right: "100vw" }}
        animate={animation}
        exit={{ right: "100vw" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className='absolute pointer-events-auto top-[5vh] right-[2vw] font-medium z-50'
      >
        <button onClick={handleClick}>CONTACT</button>
      </motion.h2>
      <AnimatePresence>

        {openContactModal && (
          <motion.div
            initial={{ ...animationModal, top: "-100vh" }}
            animate={{ ...animationModal, top: "0vh" }}
            exit={{ ...animationModal, top: "-100vh" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className='absolute top-0 right-0 z-50'
          >
            <ContactModal handleClick={handleClick} />
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

export default Contact