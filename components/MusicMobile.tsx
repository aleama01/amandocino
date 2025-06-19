import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Context } from '../Context'

const MusicMobile = ({ songs }: { songs: Array<any> }) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const ITEM_HEIGHT = 40
  const IMAGE_HEIGHT = 200

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const container = containerRef.current
      const { height } = container.getBoundingClientRect()
      const scrollPosition = container.scrollTop
      const totalHeight = songs.length * ITEM_HEIGHT + IMAGE_HEIGHT + 0

      // Calculate which item should be "hovered" based on scroll position
      if (scrollPosition > totalHeight - height) {
        setHoveredIdx(songs.length - 1)
        return
      }
      let hoveredIndex = Math.floor(((scrollPosition) / (totalHeight - height)) * songs.length)

      if (hoveredIndex < 0) {
        hoveredIndex = 0
      } else if (hoveredIndex >= songs.length) {
        hoveredIndex = songs.length - 1
      }
      setHoveredIdx(hoveredIndex)
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [songs.length])



  return (
    <div
      className="w-full h-full px-[2vw] flex flex-col justify-start py-4 fixed z-30 left-0 overflow-y-auto"
      ref={containerRef}
    >
      {songs.map((song, idx) => (
        <motion.div
          key={song.title || idx}
          className="w-full flex flex-col items-center justify-center"
          onClick={() => window.open(song.link, "_blank", "noopener,noreferrer")}
          tabIndex={0}
          role="button"
          aria-label={`Go to ${song.title}`}
          style={{ outline: 'none' }}
        >
          {hoveredIdx === idx && song.album_cover && (idx > songs.length / 2) && (
            <img
              src={song.album_cover}
              alt={song.title}
              width={400}
              height={400}
              className=" w-full h-[200px] border-[#EDF0D8] border-t pt-2  object-cover"
            />
          )}
          <div
            className={`flex flex-row flex-wrap w-full py-2 gap-x-2 items-center justify-start
                ${hoveredIdx === idx ? ' text-[#EDF0D8]' : ' text-[#EDF0D884]'}`}>
            <div className="font-medium text-[14px]" >{song.title.toUpperCase()}</div>
            <div className="">{song.artists[0].name}</div>
            {/*
              <div className={`${hoveredIdx === idx ? "opacity-100" : "opacity-0"} font-medium`}>
                {song.date}
              </div>
                */}
          </div>
          {hoveredIdx === idx && song.album_cover && (idx <= songs.length / 2) && (
            <img
              src={song.album_cover}
              alt={song.title}
              width={400}
              height={400}
              className=" w-full h-[200px] border-[#EDF0D8] border-b pb-2  object-cover"
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export default MusicMobile