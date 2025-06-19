import React, { useContext, useEffect, useState } from 'react'
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
  diary: { x: '32px', y: '50dvh', translateX: '0%', translateY: '-50%' },
  postcards: { x: '10vw', y: '5vh', translateX: '0%', translateY: '-50%' },
  projects: { x: '80vw', y: '50dvh', translateX: '-50%', translateY: '-50%' },
  music: { x: '2vw', y: '5vh', translateX: '0%', translateY: '-50%' },
  about: { x: '80vw', y: '50dvh', translateX: '-50%', translateY: '-50%' },
};

export const overlayDirectionMap = {
  homepage: { left: '100vw', top: '100dvh' },
  diary: { left: '45vw', top: 0 },
  postcards: { left: 0, top: 0 },
  projects: { left: 0, top: 0 },
  music: { left: 0, bottom: 0 },
  about: { left: '60vw', top: 0 },
};

export const overlayDirectionMapMobile = {
  homepage: { left: '100vw', top: '100dvh' },
  diary: { left: 0, top: "25dvh" },
  postcards: { left: 0, top: "25dvh" },
  projects: { left: 0, top: "25dvh" },
  music: { left: 0, top: "25dvh" },
  about: { left: 0, top: "25dvh" },
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
  const [showMenuList, setShowMenuList] = useState("vertical");
  const [menuDirection, setMenuDirection] = useState("vertical");

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    document.addEventListener('mousemove', (e) => {
      cursor!.style.left = `${e.clientX - 126}px`; // center the circle
      cursor!.style.top = `${e.clientY - 120}px`;
    });
  }, [])


  useEffect(() => {
    setShowContent(pagename)
    if (pagename == "music" || pagename == "postcards") {
      setShowMenuList("horizontal")
      setMenuDirection("horizontal")
    } else {
      setShowMenuList("vertical")
      setMenuDirection("vertical")
    }
  }, [])

  const handleClick = async (page: SectionKey) => {

    if (pathname.split('/').length > 3 && page === pagename && !mobile) {
      setExpandStory(false);
      await new Promise(res => setTimeout(res, 400));
      router.push(`/sections/${page}`)

      setTimeout(() => {
        setShowContent(page);
      }, 100);

      return;
    }

    if (page === pagename) return;

    if (!mobile) {
      let from = textAlignMap[pagename];
      let to = textAlignMap[page];

      setAlignList({ from, to });
      await new Promise(res => setTimeout(res, 10));

      // 1. Hide menu list
      if ((from != "horizontal" && to === "horizontal") || (from === "horizontal" && to != "horizontal")) {
        if (to === "horizontal") {
          setMenuDirection("horizontal")
        } else {
          setMenuDirection("vertical")
        }
        await new Promise(res => setTimeout(res, 300));


        setShowMenuList("none")
        await new Promise(res => setTimeout(res, 300));

      }

      // 3. Move menu
      setTransition(page, menuDirectionMap[page]);

      setShowContent("");
      setExpandStory(false);
      await new Promise(res => setTimeout(res, 400));

      // 4. Wait for menu move animation (match menuControls duration, e.g. 0.5s + 0.5s delay)
      await menuControls.start({ ...menuDirectionMap[page], transition: { duration: 0.4, ease: "easeInOut" } });

      if (page !== "homepage") {
        await router.push(`/sections/${page}`);
      } else {
        await router.push("/");
      }

      //await new Promise(res => setTimeout(res, 200));

      // 5. Show menu list again (if needed)
      setShowContent(page);

      if (to === "horizontal") {
        setShowMenuList("horizontal")
      } else {
        setShowMenuList("vertical")
      }
    } else {
      setShowContent("");
      setExpandStory(false);

      if (page !== "homepage") {
        await router.push(`/sections/${page}`);
      } else {
        await router.push("/");
      }

      setShowContent(page);
    }
  };

  useEffect(() => {
    let res = isMobile()
    setMobile(res)
  }, [])


  return (
    <div className='relative overflow-hidden h-[100dvh] w-screen'>
      <Menu pagename={pagename} handleClickFunction={handleClick} menuControls={menuControls} align={alignList} showMenuList={showMenuList} menuDirection={menuDirection} />
      <SideMenuButton />
      <SideMenu handleClickFunction={handleClick} />
      <Contact />
      <div className="custom-cursor" id="custom-cursor"></div>
      <Component {...pageProps} />
    </div>
  )
}

export default Layout