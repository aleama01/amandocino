import React, { useContext } from 'react'
import { Context } from '../Context'
import { BsList } from 'react-icons/bs';

/**
 * Button component to open the SideMenu component.
 * 
 * @returns {ReactNode} A react component containing a button to open the menu component.
 */
const SideMenuButton = () => {
  const { setOpenSideMenu } = useContext(Context);

  return (
    <div>
      <button aria-label='Open side menu' className='right-2 sm:right-14 text-[#ffffe9] fixed font-thin text-3xl top-2 sm:text-[32px] z-50'
        onClick={() => (setOpenSideMenu(true))}>
        <BsList />
      </button>
    </div>
  )
}

export default SideMenuButton