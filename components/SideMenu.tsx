import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Context } from '../Context';
import { MdClose } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { menuDirectionMap, SectionKey } from './Layout';
import { motion } from 'framer-motion';

/**
 * Menu component that contains the links to all the other pages of the website.
 * 
 * @returns {ReactNode} A react component that is a disappearing menu containing the links to all the other pages of the website. The link to the page the user is already in is not showed.
 */
const SideMenu = ({ handleClickFunction }: { handleClickFunction: (key: SectionKey) => void }) => {
  let pathname = usePathname();
  let pagename: SectionKey = "homepage";

  if (pathname !== '/') {
    pagename = pathname.split('/')[2] as SectionKey;
  }
  const { setOpenSideMenu, openSideMenu } = useContext(Context);

  const handleClick = (key: SectionKey) => {
    setOpenSideMenu(false)
    handleClickFunction(key)
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 backdrop-blur-sm bg-black/30 transition-opacity duration-400"
        style={{
          opacity: openSideMenu ? 1 : 0,
          pointerEvents: openSideMenu ? 'auto' : 'none'
        }}
        onClick={() => setOpenSideMenu(false)}
      />
      <div className='fixed w-[80dvw] h-[100dvh] bg-cover z-[60]  text-[#EDF0D8] bg-[#101411] duration-[400ms]'
        style={{ right: openSideMenu ? '0vw' : '-100vw', pointerEvents: openSideMenu ? 'auto' : 'none' }}>

        <div className='relative w-full mt-[4vh]'>
          <button aria-label='Close side menu' className='left-[2vw] font-thin text-3xl absolute sm:text-[32px] '
            onClick={() => (setOpenSideMenu(false))}>
            <MdClose />
          </button>
        </div>

        <div className='mx-auto top-1/2 absolute -translate-y-1/2 right-[2vw]'>
          <h1 className='leading-none'>amandocino</h1>
          <motion.ul
            className={`list-none absolute font-medium text-sm mt-2`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}>
            {Object.keys(menuDirectionMap).filter(key => key !== pagename).map((key, idx) => (
              <motion.li
                key={key}
                className="my-1 sm:w-[254px] w-[172px] text-right"
                initial={{ opacity: 1 }}
                animate={{

                  x: 0,
                  transition: { duration: 0.2, delay: idx * 0.05 }
                }}
                exit={{ opacity: 1, transition: { duration: 0.2, delay: idx * 0.05 } }}
              >
                <button
                  key={key}
                  className="mx-auto box-content text-center"
                  onClick={() => handleClick(key as SectionKey)}>
                  [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>

      </div >
    </>
  )
}

export default SideMenu