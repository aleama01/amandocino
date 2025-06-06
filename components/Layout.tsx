import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SideMenu from './SideMenu'
import Menu from './Menu'
import { usePathname, useRouter } from 'next/navigation'
import { CustomValueType, motion, useAnimation } from "framer-motion"
import { useTransition } from './TransitionProvider'
import { text } from 'stream/consumers'
import path from 'path'
import { Context } from '../Context'
import Contact from './Contact'
import { isMobile } from '../scripts/isMobile'
import SideMenuButton from './SideMenuButton'

export const menuDirectionMap = {
  homepage: { x: '50dvw', y: '50dvh', translateX: '-50%', translateY: '-50%' },
  diary: { x: '32px', y: '50vh', translateX: '0%', translateY: '-50%' },
  postcards: { x: '10vw', y: '5vh', translateX: '0%', translateY: '-50%' },
  projects: { x: '80vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
  music: { x: '2vw', y: '5vh', translateX: '0%', translateY: '-50%' },
  about: { x: '80vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
};

export const overlayDirectionMap = {
  homepage: { left: '100vw', top: '100vh' },
  diary: { left: '45vw', top: 0 },
  postcards: { left: 0, top: 0 },
  projects: { left: 0, top: 0 },
  music: { left: 0, bottom: 0 },
  about: { left: '60vw', top: 0 },
};

export const overlayDirectionMapMobile = {
  homepage: { left: '100vw', top: '100vh' },
  diary: { left: 0, top: "25vh" },
  postcards: { left: 0, top: "25vh" },
  projects: { left: 0, top: "25vh" },
  music: { left: 0, top: "25vh" },
  about: { left: 0, top: "25vh" },
};

const textAlignMap = {
  homepage: "center",
  diary: "left",
  postcards: "horizontal",
  projects: "right",
  music: "horizontal",
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
  const { expandStory, setExpandStory, showContent, setShowContent, mobile, setMobile } = useContext(Context);
  const [showMenuList, setShowMenuList] = useState(true);

  const handleClick = async (page: SectionKey) => {
    if (pathname.split('/').length > 3 && page === pagename) {
      setExpandStory(false);
      setTimeout(() => {
        router.push(`/sections/${page}`)
      }, 400);
      setTimeout(() => {
        setShowContent(true);
      }, 400);
      return;
    }

    if (page === pagename) return;

    let from = textAlignMap[pagename];
    let to = textAlignMap[page];
    setAlignList({ from, to });
    await new Promise(res => setTimeout(res, 220));

    // 1. Hide menu list
    if (to === "horizontal" || (from === "horizontal" && to != "horizontal")) {
      setShowMenuList(false)
    }
    // 2. Wait for menu list to disappear (match exit duration in Menu.tsx, e.g. 200ms)
    await new Promise(res => setTimeout(res, 10));


    // 3. Move menu
    setTransition(page, menuDirectionMap[page]);
    setShowContent(false);
    setExpandStory(false);


    if (page !== "homepage") {
      router.push(`/sections/${page}`);
    } else {
      router.push("/");
    }

    // 4. Wait for menu move animation (match menuControls duration, e.g. 0.5s + 0.5s delay)
    await menuControls.start({ ...menuDirectionMap[page], transition: { duration: 0.5, delay: 0.5 } });

    // 5. Show menu list again (if needed)
    setShowMenuList(true);

    setTimeout(() => {
      setShowContent(true);
    }, 200);
  };

  useEffect(() => {
    let res = isMobile()
    setMobile(res)
  }, [])


  return (
    <div className='relative overflow-hidden h-screen w-screen'>
      <Menu pagename={pagename} handleClickFunction={handleClick} menuControls={menuControls} align={alignList} showMenuList={showMenuList} />
      <SideMenuButton />
      <SideMenu handleClickFunction={handleClick} />
      <Contact />
      <Component {...pageProps} />
    </div>
  )
}

export default Layout