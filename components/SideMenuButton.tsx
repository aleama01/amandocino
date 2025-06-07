import React, { useContext } from 'react'
import { Context } from '../Context'
import { BsList } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

/**
 * Button component to open the SideMenu component.
 * 
 * @returns {ReactNode} A react component containing a button to open the menu component.
 */
const SideMenuButton = () => {
  const { setOpenSideMenu } = useContext(Context);
  let pathname = usePathname();

  return (
    <div>
      <button aria-label='Open side menu' className={`text-[#EDF0D8] fixed font-thin text-3xl top-[4dvh] ${pathname === "/" ? "right-[-10vw]" : "right-[2vw]"} md:text-[32px] duration-[400ms] z-50`}
        onClick={() => (setOpenSideMenu(true))}>
        <BsList />
      </button>
    </div>
  )
}

export default SideMenuButton