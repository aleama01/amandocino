import React, { useContext, useEffect, useState } from 'react'
import { AnimatePresence, CustomValueType, motion, useAnimation } from "framer-motion"
import { useRouter } from 'next/navigation'
import { useTransition } from './TransitionProvider'
import { menuDirectionMap, SectionKey } from './Layout';
import { Context } from '../Context';

interface MenuProps {
  pagename: SectionKey;
  menuControls: any;
  handleClickFunction: (key: SectionKey) => void;
  align: { from: string, to: string };
  showMenuList: string;
  menuDirection: string;
}

const Menu: React.FC<MenuProps> = ({ pagename, menuControls, handleClickFunction, align, showMenuList, menuDirection }) => {
  const { mobile, showContent } = useContext(Context)

  if (mobile) {
    return (
      <AnimatePresence>
        {pagename === "homepage" &&
          <motion.div
            className={`absolute z-40`}
            id="menu"
            initial={{ left: '50dvw', top: '-100dvh', translateX: '-50%', translateY: '-50%' }}
            animate={{ left: '50dvw', top: '50dvh', translateX: '-50%', translateY: '-50%' }}
            exit={{ left: '50dvw', top: '-100dvh', translateX: '-50%', translateY: '-50%' }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >

            <h1 onClick={() => handleClickFunction("homepage" as SectionKey)} className='leading-none'>amandocino</h1>

            <motion.ul
              className={`list-none absolute font-medium text-sm mt-2`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{}}>
              {Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
                <li
                  key={key}
                  className="my-1 md:w-[254px] w-[172px] text-center"
                >
                  <button
                    className="mx-auto box-content text-center"
                    onClick={() => handleClickFunction(key as SectionKey)}>
                    [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                  </button>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        }
      </AnimatePresence>
    )
  } else {
    return (
      <motion.div
        className={`absolute z-40`}
        id="menu"
        initial={menuDirectionMap[pagename]}
        animate={menuControls}
        style={{ willChange: "transform, opacity" }}
      >
        <div className='flex flex-row gap-x-6 items-end relative'>
          <h1 onClick={() => handleClickFunction("homepage" as SectionKey)} className='leading-none'>amandocino</h1>
          <AnimatePresence>
            {showMenuList === "horizontal" &&
              <motion.ul
                initial={{ opacity: 0, left: 270 }}
                animate={{
                  opacity: 1,
                  left: 270
                }}
                exit={{ opacity: 0, left: 270 }}
                transition={{ duration: 0.01 }}
                className={`list-none font-medium text-sm gap-x-4 flex flex-row absolute ${pagename === "postcards" || pagename === "music" ? "" : "cursor-none pointer-events-none"}`}
                style={{ willChange: "opacity, left" }}
              >
                <AnimatePresence>
                  {(menuDirection === "horizontal") && (
                    Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
                      <motion.li
                        key={key}
                        style={{ willChange: "opacity, x, transform" }}
                        className="my-1"
                        initial={{ opacity: 0, y: -200 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.2, ease: "easeInOut", delay: idx * 0.05 }
                        }}

                        exit={{ opacity: 0, y: -200, transition: { duration: 0.2, ease: "easeInOut", delay: (Object.keys(menuDirectionMap).length - idx) * 0.05 } }}
                      >
                        <button
                          className="mx-auto box-content"
                          onClick={() => handleClickFunction(key as SectionKey)}>
                          [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                        </button>
                      </motion.li>
                    ))
                  )}
                </AnimatePresence>
              </motion.ul>
            }
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {showMenuList === "vertical" && (
            <motion.ul
              className={`list-none absolute font-medium text-sm mt-2`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}>
              <AnimatePresence>
                {(menuDirection === "vertical") && Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
                  <motion.li
                    key={key}
                    className="my-1 md:w-[254px] w-[172px]"
                    initial={{ opacity: 1, x: align.from === "left" ? -200 : align.from === "right" ? 200 : align.to === "right" ? 200 : align.to === "left" ? -200 : 0 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.2, ease: "easeInOut", delay: idx * 0.05 }
                    }}
                    exit={{ opacity: 1, x: (align.from === "left" && align.to === "horizontal") ? -400 : (align.from === "right" && align.to === "horizontal") ? 400 : 0, transition: { duration: 0.2, ease: "easeInOut", delay: idx * 0.05 } }}
                  >
                    {mobile ?
                      <motion.button
                        key={key}
                        className="mx-auto box-content"
                        initial={{ x: align.from === "center" ? "calc(-50% + 86px)" : align.from === "left" ? "0px" : align.from === "right" ? "calc(-100% + 172px)" : align.to === "center" ? "calc(-50% + 86px)" : align.to === "left" ? "0px" : align.to === "right" ? "calc(-100% + 172px)" : 0 }}
                        animate={{
                          x: align.to === "center" ? "calc(-50% + 86px)" : align.to === "left" ? "0px" : align.to === "right" ? "calc(-100% + 172px)" : align.to === "horizontal" ? align.from === "center" ? "calc(-50% + 86px)" : align.from === "left" ? "0px" : align.from === "right" ? "calc(-100% + 172px)" : "0px" : "0px"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onClick={() => handleClickFunction(key as SectionKey)}>
                        [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                      </motion.button>
                      :
                      <motion.button
                        key={key}
                        className="mx-auto box-content"
                        initial={{ x: align.from === "center" ? "calc(-50% + 127px)" : align.from === "left" ? "0px" : align.from === "right" ? "calc(-100% + 254px)" : (align.from === "horizontal" && align.to === "center") ? "calc(-50% + 127px)" : (align.from === "horizontal" && align.to === "left") ? "0px" : (align.from === "horizontal" && align.to === "right") ? "calc(-100% + 254px)" : 0 }}
                        animate={{
                          x: align.to === "center" ? "calc(-50% + 127px)" : align.to === "left" ? "0px" : align.to === "right" ? "calc(-100% + 254px)" : (align.to === "horizontal" && align.from === "center") ? "calc(-50% + 127px)" : (align.to === "horizontal" && align.from === "left") ? "0px" : (align.to === "horizontal" && align.from === "right") ? "calc(-100% + 254px)" : "0px"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        onClick={() => handleClickFunction(key as SectionKey)}>
                        [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                      </motion.button>
                    }
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }
};

export default Menu;