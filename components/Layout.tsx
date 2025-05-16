import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
import Menu from './Menu'
import { usePathname, useRouter } from 'next/navigation'
import { CustomValueType, motion, useAnimation } from "framer-motion"
import { useTransition } from './TransitionProvider'
import { text } from 'stream/consumers'

export const menuDirectionMap = {
  homepage: { x: '50dvw', y: '50dvh', translateX: '-50%', translateY: '-50%' },
  diary: { x: '32px', y: '50vh', translateX: '0%', translateY: '-50%' },
  postcards: { x: '10vw', y: '5vh', translateX: '0%', translateY: '-50%' },
  projects: { x: '80vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
  music: { x: '20vw', y: '5vh', translateX: '-50%', translateY: '-50%' },
  about: { x: '90vw', y: '60vh', translateX: '-50%', translateY: '-50%' },
};

export const overlayDirectionMap = {
  homepage: { x: '100vw', y: '100vh' },
  diary: { x: '45vw', y: 0 },
  postcards: { x: 0, y: 0 },
  projects: { x: 0, y: 0 },
  music: { x: '80vw', y: 0 },
  about: { x: '60vw', y: 0 },
};

const textAlignMap = {
  homepage: "center",
  diary: "left",
  postcards: "center",
  projects: "right",
  music: "center",
  about: "right",
}

export type SectionKey = keyof typeof menuDirectionMap;


/**
 * Layout component of the website. This is applied to every page of the website and it includes the header,footer and menu components.
 * 
 * @param children all the children nodes are passed as an argument.
 * @returns {ReactNode} A react component that applies the same layout structure to each page. This includes the header,footer and menu components.
 */
const Layout = ({ Component, pageProps }: any) => {
  let pathname = usePathname();
  let pagename: SectionKey = "homepage";
  if (pathname !== '/') {
    pagename = pathname.split('/')[2] as SectionKey;
  }

  const router = useRouter();
  const menuControls = useAnimation();
  const { setTransition } = useTransition();
  const [alignList, setAlignList] = useState({ from: textAlignMap[pagename], to: textAlignMap[pagename] });

  // Add state to control content visibility
  const [showContent, setShowContent] = useState(true);

  const handleClick = async (page: SectionKey) => {
    if (page === pagename) return; // Don't animate if already on the page
    setTransition(page, menuDirectionMap[page]);
    setShowContent(false); // Trigger exit animation

    let from = ""
    let to = ""
    if (pagename === "homepage") {
      from = "center"
    } else if (page === "diary") {
      from = "left"
    } else {
      from = "right"
    }

    if (page === "homepage") {
      to = "center"
    } else if (page === "diary") {
      to = "left"
    } else {
      to = "right"
    }

    setAlignList({ from: from, to: to })

    if (page !== "homepage") {
      router.push(`/sections/${page}`);
    } else {
      router.push("/");
    }

    await menuControls.start({ ...menuDirectionMap[page], transition: { duration: 0.2, delay: 0.2 } });

    setTimeout(() => {
      // Reset for next mount
      setShowContent(true);
    }, 200);
  };

  return (
    <div className='relative overflow-hidden h-screen w-screen'>
      <Menu pagename={pagename} handleClickFunction={handleClick} menuControls={menuControls} align={alignList} />
      <Component {...pageProps} showContent={showContent} />
    </div>
  )
}

export default Layout