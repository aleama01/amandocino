import React, { useEffect, useState } from 'react'
import { CustomValueType, motion, useAnimation } from "framer-motion"
import { useRouter } from 'next/navigation'
import { useTransition } from './TransitionProvider'
import { menuDirectionMap, SectionKey } from './Layout';

interface MenuProps {
  pagename: SectionKey;
  menuControls: any;
  handleClickFunction: (key: SectionKey) => void;
  align: { from: string, to: string };
}

const Menu: React.FC<MenuProps> = ({ pagename, menuControls, handleClickFunction, align }) => {
  return (
    <motion.div
      className={`absolute z-40`}
      id="menu"
      initial={menuDirectionMap[pagename]}
      animate={menuControls}
    >
      <div className='flex flex-row gap-x-6 items-end relative'>
        <h1 onClick={() => handleClickFunction("homepage" as SectionKey)} className='leading-none'>amandocino</h1>
        <motion.ul
          initial={{ opacity: 0, left: 0 }}
          animate={{
            opacity: 1,
            left: 270
          }}
          exit={{ opacity: 0, left: 0 }}
          transition={{ duration: 0.01 }}
          className={`list-none font-medium text-sm gap-x-4 flex flex-row absolute ${pagename === "postcards" || pagename === "music" ? "" : "cursor-none pointer-events-none"}`}
        >
          {Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
            <motion.li
              key={key}
              style={{ willChange: "opacity, y, transform" }}
              className="my-1"
              initial={{ opacity: 1, y: -40 }}
              animate={{
                opacity: pagename === "postcards" || pagename === "music" ? 1 : 0,
                y: pagename === "postcards" || pagename === "music" ? 0 : -40
              }}
              exit={{ opacity: 1, y: -40 }}
              transition={{ duration: 0.1, delay: idx * 0.05 }}
            >
              <button
                className="mx-auto box-content"
                onClick={() => handleClickFunction(key as SectionKey)}>
                [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.ul
        className={`list-none absolute font-medium text-sm mt-2 ${pagename === "postcards" || pagename === "music" ? "cursor-none pointer-events-none" : ""}`}>
        {Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key, idx) => (
          <motion.li
            key={key}
            className="my-1 w-[254px]"
            initial={{ opacity: 1, x: align.from === "left" ? -200 : align.from === "right" ? 200 : -200 }}
            animate={{
              opacity: pagename === "postcards" || pagename === "music" ? 0 : 1,
              x: 0,
              transition: { duration: 0.1, delay: idx * 0.05 }
            }}
            exit={{ opacity: 1, x: align.from === "left" ? -200 : align.from === "right" ? 200 : -200 }}
          >
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
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Menu;