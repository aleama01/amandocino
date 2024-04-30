import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'

/**
 * Layout component of the website. This is applied to every page of the website and it includes the header,footer and menu components.
 * 
 * @param children all the children nodes are passed as an argument.
 * @returns {ReactNode} A react component that applies the same layout structure to each page. This includes the header,footer and menu components.
 */
const Layout = ({ children }: any) => {

  return (
    <div className='relative'>
      <Header />
      {children}
      <SideMenu />
      <Footer />
    </div>
  )
}

export default Layout