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
  showMenuList: boolean;
}

const Menu: React.FC<MenuProps> = ({ pagename, menuControls, handleClickFunction, align, showMenuList }) => {
  const [horizontalMenu, setHorizontalMenu] = useState<boolean>(false);
  const { mobile, showContent } = useContext(Context)
  useEffect(() => {
    if (align.to === "horizontal") {
      setHorizontalMenu(true);
    } else {
      setHorizontalMenu(false);
    }
  }, [align.to]);

  if (mobile) {
    return (
      <AnimatePresence>
        {showContent && pagename === "homepage" &&
          <motion.div
            className={`absolute z-40`}
            id="menu"
            initial={{ left: '50dvw', top: '-50dvh', translateX: '-50%', translateY: '-50%' }}
            animate={{ left: '50dvw', top: '50dvh', translateX: '-50%', translateY: '-50%' }}
            exit={{ left: '50dvw', top: '-50dvh', translateX: '-50%', translateY: '-50%' }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.4 }}
          >

            <h1 onClick={() => handleClickFunction("homepage" as SectionKey)} className='leading-none'>amandocino</h1>
            <AnimatePresence>
              {showMenuList && (
                <motion.ul
                  className={`list-none absolute font-medium text-sm mt-2`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{ opacity: 0 }}>
                  {Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
                    <li
                      key={key}
                      className="my-1 sm:w-[254px] w-[172px] text-center"
                    >
                      <button
                        key={key}
                        className="mx-auto box-content text-center"
                        onClick={() => handleClickFunction(key as SectionKey)}>
                        [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
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
            {showMenuList &&
              <motion.ul
                initial={{ opacity: 0, left: 0 }}
                animate={{
                  opacity: 1,
                  left: 270
                }}
                exit={{ opacity: 0, left: 0 }}
                transition={{ duration: 0.05 }}
                className={`list-none font-medium text-sm gap-x-4 flex flex-row absolute ${pagename === "postcards" || pagename === "music" ? "" : "cursor-none pointer-events-none"}`}
                style={{ willChange: "opacity, left" }}
              >
                <AnimatePresence>
                  {horizontalMenu && (
                    Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
                      <motion.li
                        key={key}
                        style={{ willChange: "opacity, x, transform" }}
                        className="my-1"
                        initial={{ opacity: 1, x: -400 }}
                        animate={{
                          opacity: pagename === "postcards" || pagename === "music" ? 1 : 0,
                          x: pagename === "postcards" || pagename === "music" ? 0 : -400,
                          transition: { duration: 0.2, delay: idx * 0.05 }
                        }}

                        exit={{ opacity: 1, x: -400, transition: { duration: 0.2, delay: (Object.keys(menuDirectionMap).length - idx) * 0.05 } }}
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
          {showMenuList && (
            <motion.ul
              className={`list-none absolute font-medium text-sm mt-2 ${pagename === "postcards" || pagename === "music" ? "cursor-none pointer-events-none" : ""}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}>
              <AnimatePresence>
                {!horizontalMenu && Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
                  <motion.li
                    key={key}
                    className="my-1 sm:w-[254px] w-[172px]"
                    initial={{ opacity: 1, x: align.from === "left" ? -200 : align.from === "right" ? 200 : -200 }}
                    animate={{
                      opacity: pagename === "postcards" || pagename === "music" ? 0 : 1,
                      x: 0,
                      transition: { duration: 0.2, delay: idx * 0.05 }
                    }}
                    exit={{ opacity: 1, x: align.from === "left" ? -200 : align.from === "right" ? 200 : -200, transition: { duration: 0.2, delay: idx * 0.05 } }}
                  >
                    {mobile ?
                      <motion.button
                        key={key}
                        className="mx-auto box-content"
                        initial={{ x: align.from === "center" ? "calc(-50% + 86px)" : align.from === "left" ? "0px" : "calc(-100% + 172px)" }}
                        animate={{
                          x: align.to === "center" ? "calc(-50% + 86px)" : align.to === "left" ? "0px" : align.to === "right" ? "calc(-100% + 172px)" : align.to === "horizontal" ? align.from === "center" ? "calc(-50% + 86px)" : align.from === "left" ? "0px" : align.from === "right" ? "calc(-100% + 172px)" : "0px" : "0px"
                        }}
                        transition={{ duration: 0.4 }}
                        onClick={() => handleClickFunction(key as SectionKey)}>
                        [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
                      </motion.button>
                      :
                      <motion.button
                        key={key}
                        className="mx-auto box-content"
                        initial={{ x: align.from === "center" ? "calc(-50% + 127px)" : align.from === "left" ? "0px" : "calc(-100% + 254px)" }}
                        animate={{
                          x: align.to === "center" ? "calc(-50% + 127px)" : align.to === "left" ? "0px" : align.to === "right" ? "calc(-100% + 254px)" : align.to === "horizontal" ? align.from === "center" ? "calc(-50% + 127px)" : align.from === "left" ? "0px" : align.from === "right" ? "calc(-100% + 254px)" : "0px" : "0px"
                        }}
                        transition={{ duration: 0.4 }}
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