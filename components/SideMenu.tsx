import React, { useEffect } from 'react'
import { useContext } from 'react';
import { Context } from '../Context';
import { MdClose } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Menu component that contains the links to all the other pages of the website.
 * 
 * @returns {ReactNode} A react component that is a disappearing menu containing the links to all the other pages of the website. The link to the page the user is already in is not showed.
 */
const SideMenu = () => {
  const { setOpenSideMenu, openSideMenu } = useContext(Context);

  const handleClick = () => {
    setOpenSideMenu(false)
  }

  let pathname = usePathname();

  return (
    <div className='fixed inset-0 bg-cover z-[60] duration-300  text-black bg-[#ffffe9] '
      style={{ opacity: openSideMenu ? '1' : '0', pointerEvents: openSideMenu ? 'auto' : 'none' }}>

      <button aria-label='Close side menu' className='right-2 sm:right-14 fixed font-thin text-3xl top-2 sm:text-[32px] '
        onClick={() => (handleClick())}>
        <MdClose />
      </button>

      <div className='flex flex-col items-center h-full justify-center'>
        {(pathname != null && pathname != "/sections/diary") &&
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={'/sections/diary'}>
            <h1 className='duration-500 menuel '
              onClick={() => (handleClick())}> DIARY </h1>
          </Link>
        }
        {(pathname != null && pathname != "/sections/photos") &&
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={'/sections/photos'}>
            <h1 className=' duration-500 menuel'
              onClick={() => (handleClick())}> PHOTOS </h1>
          </Link>
        }
        {(pathname != null && pathname != "/sections/friends") &&
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={'/sections/friends'}>
            <h1 className=' duration-500 menuel'
              onClick={() => (handleClick())}> FRIENDS </h1>
          </Link>

        }
        {(pathname != null && pathname != "/sections/projects") &&
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={'/sections/projects'}>
            <h1 className=' duration-500 menuel'
              onClick={() => (handleClick())}> PROJECTS </h1>
          </Link>
        }
        {(pathname != null && pathname != "/sections/about") &&
          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={'/sections/about'}>
            <h1 className=' duration-500 menuel'
              onClick={() => (handleClick())}> ABOUT </h1>
          </Link>
        }
      </div>
    </div >
  )
}

export default SideMenu