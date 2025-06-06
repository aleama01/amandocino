import React, { useContext, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Context } from '../Context'

const Music = ({ songs }: { songs: Array<any> }) => {
  const rowRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const ITEM_WIDTH = 60
  const IMAGE_WIDTH = 300
  // Scroll handler

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !rowRef.current) return

      const container = containerRef.current
      let { left, width } = container.getBoundingClientRect()
      const mouseX = e.clientX - left
      const totalWidth = songs.length * ITEM_WIDTH + IMAGE_WIDTH


      // If mouse is in the right 20% of the container, scroll right
      if (mouseX > 0.2 * width && mouseX < width * 0.8) {
        // Scroll right smoothly
        const scrollAmount = (totalWidth - width) / (width * 0.6) * (mouseX - 0.2 * width)
        rowRef.current.style.left = "-" + scrollAmount + "px"
      } else if (mouseX < 0.2 * width) {
        rowRef.current.style.left = "-" + 0 + "px"
      } else if (mouseX > 0.8 * width) {
        rowRef.current.style.left = "-" + (totalWidth - width) + "px"
      }

    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
    }
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [songs])


  return (
    <div
      className="w-full h-full fixed z-30 left-0 overflow-hidden"
      ref={containerRef}
    >
      <motion.div
        ref={rowRef}
        className="flex flex-row absolute justify-start h-full py-4"
        style={{ minWidth: songs.length * ITEM_WIDTH }}
      >
        {songs.map((song, idx) => (
          <motion.div
            key={song.title || idx}
            className="h-full min-w-[60px] flex flex-row items-end justify-center"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => window.open(song.link, "_blank", "noopener,noreferrer")}
            tabIndex={0}
            role="button"
            aria-label={`Go to ${song.title}`}
            style={{ outline: 'none' }}
          >
            {hoveredIdx === idx && song.album_cover && (
              <img
                src={song.album_cover}
                alt={song.title}
                width={300}
                height={500}
                className=" min-w-[300px] h-full object-cover"
              />
            )}
            <div
              className={`flex flex-row border-r h-3/4 w-full gap-x-2 items-center justify-end
                ${hoveredIdx === idx ? ' border-[#EDF0D8] text-[#EDF0D8]' : 'border-transparent text-[#EDF0D884]'}`} style={{ writingMode: 'vertical-lr', textOrientation: 'mixed', rotate: '180deg' }}>
              <div className={`justify-self-start flex-1 ${hoveredIdx === idx ? "opacity-100" : "opacity-0"} font-medium text-[16px]`}>
                {song.date}
              </div>
              <div className="">{song.artists[0].name}</div>
              <div className="font-medium text-[16px]" >{song.title.toUpperCase()}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  )
}

export default Music