import React, { ReactNode } from 'react'

/**
 * Footer component that includes the copyright claim.
 * 
 * @returns {ReactNode} A React element that displays copyright claim.
 */
const Footer = () => {
  function getYear() {
    const date = new Date()
    return date.getFullYear()
  }
  return (
    <div className='absolute bottom-2 w-full text-xs text-[#EDF0D8] z-20 flex flex-row justify-center '>
      © {getYear()} Alessandro Amandonico. All rights reserved.
    </div>
  )
}

export default Footer