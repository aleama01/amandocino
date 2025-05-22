import React, { useContext, useState } from 'react'
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

export const menuDirectionMap = {
  homepage: { x: '50dvw', y: '50dvh', translateX: '-50%', translateY: '-50%' },
  diary: { x: '32px', y: '50vh', translateX: '0%', translateY: '-50%' },
  postcards: { x: '10vw', y: '5vh', translateX: '0%', translateY: '-50%' },
  projects: { x: '80vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
  music: { x: '20vw', y: '5vh', translateX: '-50%', translateY: '-50%' },
  about: { x: '80vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
};

export const overlayDirectionMap = {
  homepage: { left: '100vw', top: '100vh' },
  diary: { left: '45vw', top: 0 },
  postcards: { left: 0, top: 0 },
  projects: { left: 0, top: 0 },
  music: { left: '80vw', top: 0 },
  about: { left: '60vw', top: 0 },
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
  const { expandStory, setExpandStory, showContent, setShowContent } = useContext(Context);

  const handleClick = async (page: SectionKey) => {

    if (pathname.split('/').length > 3 && page === pagename) {
      setExpandStory(false);
      setTimeout(() => {
        router.push(`/sections/${page}`)
      }, 400); // Match this to your exit animation duration

      setTimeout(() => {
        setShowContent(true);
      }, 400);

      return;
    }

    if (page === pagename) {
      return;
    } // Don't animate if already on the page

    setTransition(page, menuDirectionMap[page]);
    setShowContent(false); // Trigger exit animation
    setExpandStory(false); // Trigger exit animation

    let from = textAlignMap[pagename];
    let to = textAlignMap[page];

    setAlignList({ from: from, to: to })

    if (page !== "homepage") {
      router.push(`/sections/${page}`);
    } else {
      router.push("/");
    }

    await menuControls.start({ ...menuDirectionMap[page], transition: { duration: 0.5, delay: 0.5 } });

    setTimeout(() => {
      // Reset for next mount
      setShowContent(true);
    }, 200);
  };

  return (
    <div className='relative overflow-hidden h-screen w-screen'>
      <Menu pagename={pagename} handleClickFunction={handleClick} menuControls={menuControls} align={alignList} />
      <Component {...pageProps} />
    </div>
  )
}

export default Layout