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
        <h1 onClick={() => handleClickFunction("homepage" as SectionKey)}>amandocino</h1>
        <motion.ul
          initial={{ opacity: 0, left: 0 }}
          animate={{
            opacity: pagename === "postcards" || pagename === "music" ? 1 : 0,
            left: pagename === "postcards" || pagename === "music" ? 270 : 0
          }}
          exit={{ opacity: 0, left: 0 }}
          transition={{ duration: 0.2 }}
          className={`list-none font-medium text-sm gap-x-4 flex flex-row absolute ${pagename === "postcards" || pagename === "music" ? "" : "cursor-none pointer-events-none"}`}
        >
          {Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key) => (
            <li
              key={key}
              className="my-1"
            >
              <button
                className="mx-auto box-content"
                onClick={() => handleClickFunction(key as SectionKey)}>
                [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
              </button>
            </li>
          ))}
        </motion.ul>
      </div>
      <motion.ul
        initial={{ opacity: 0, top: 0 }}
        animate={{
          opacity: pagename === "postcards" || pagename === "music" ? 0 : 1,
          top: pagename === "postcards" || pagename === "music" ? 0 : 40
        }}
        exit={{ opacity: 0, top: 0 }}
        transition={{ duration: 0.2 }}
        className={`list-none absolute font-medium text-sm mt-2 ${pagename === "postcards" || pagename === "music" ? "cursor-none pointer-events-none" : ""}`}>
        {Object.keys(menuDirectionMap).filter(key => key !== "homepage").map((key) => (
          <li
            className="my-1 w-[254px]"
          >
            <motion.button
              key={key}
              className="mx-auto box-content"
              initial={{ x: align.from === "center" ? "calc(-50% + 127px)" : align.from === "left" ? "0px" : "calc(-100% + 254px)" }}
              animate={{
                x: align.to === "center" ? "calc(-50% + 127px)" : align.to === "left" ? "0px" : "calc(-100% + 254px)"
              }}
              transition={{ duration: 0.4 }}
              onClick={() => handleClickFunction(key as SectionKey)}>
              [<span className="mx-2 uppercase">{key.toUpperCase()}</span>]
            </motion.button>
          </li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Menu;