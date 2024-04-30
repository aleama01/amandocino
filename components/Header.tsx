import Link from 'next/link'
import React from 'react'
import SideMenuButton from './SideMenuButton'
import { usePathname } from 'next/navigation';

/**
 * React component that opens the email app to contact the author.
 * 
 * @returns {ReactNode} A react component that opens the email app to contact the author when clicked.
 */
const EmailDiv = () => {
  const recipient = 'alessandro.amandonico1@gmail.com';

  const handleClick = () => {
    const mailtoLink = `mailto:${recipient}`;
    window.location.href = mailtoLink;
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      contact
    </div>
  );
};


/**
 * Header component of the website that includes the title, the menu button and links to about and contact pages.
 * 
 * @returns {ReactNode} A react component displaying the navigation options.
 */
const Header = () => {
  let pathname = usePathname();
  return (
    <div className='relative z-30'>
      {pathname != null && pathname != '/' &&
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href="/">
          <div className='absolute max-w-[100vw] text-xl top-2 sm:text-[32px] mx-auto left-1/2 -translate-x-1/2' style={{ fontFamily: 'ClashDisplay-Regular' }}>
            AMANDOCINO
          </div>
        </Link>
      }

      <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href="/sections/about" >
        <h2 className='fixed text-base rotate-180 top-[50vh] fixedbug left-1 sm:left-3' style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}> about </h2>
      </Link>

      <div className='fixed text-base top-[50vh] fixedbug right-1 sm:right-3' style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        <EmailDiv />
      </div>
      {pathname != null && pathname != '/' &&
        <SideMenuButton />
      }
    </div>
  )
}

export default Header