import React, { useContext } from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Context } from '../Context'

/**
 * Container of all the elements shown in the about me page.
 * 
 * @returns {ReactNode} A react component with a presentation of the author with a text, image and all social media links.
 */
export const AboutMe = () => {
  const { mobile } = useContext(Context)

  if (mobile) {
    return (
      <div className='flex flex-col space-y-8 text-[#EDF0D8] pt-2 pb-6 items-start min-h-[75dvh] ' >
        <div className='text-xs flex flex-col space-y-2'>
          <h2 className='font-bold' >
            HEY!
          </h2>

          <div className='text-justify'>
            Hi, my name is Alessandro :)<br />it&#39;s difficult to summarize myself in such few words, but I&#39;ll try.<br /><br />

            I like writing (whenever I have time to do that) about my life and interactions I have with my surroundings. I love backpacking to places where I can feel connected with nature, and I recently started doing birdwatching.<br /> Also, I often spend all my day listening to music, I have a lot of instruments which I&#39;ve not yet to learn how to play, but still I love experimenting with them.<br /><br />
            I&#39;ve completed my bachelor&#39;s in Computer Science Engineering (Politecnico di Milano) and now I&#39;m studying for a double degree master&#39;s in Human-Computer Interaction and UX/UI Design. After my entry year at Aalto University in Finland, I am now studying at KTH in Stockholm, which means that I will still have to survive the dark and cold Scandinavian nights of winter for one year :).<br /><br />
            To get to know me better, check my social media. Or just text me, I would appreciate it better :)<br />
          </div>
        </div>
        <div className='h-[200px] w-[300px] self-end bg-center bg-no-repeat bg-cover duration-200 z-10 '
          style={{ backgroundImage: `url(/me.jpeg)` }} />

        <ul className='flex text-xs flex-col justify-start flex-wrap gap-2 pt-4'>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/alessandro_amandonico/' className="text-[#EDF0D8]  flex flex-col items-start">
              <span className='font-medium mr-1'>Instagram: </span> <span>@alessandro_amandonico</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/aleama01' className="text-[#EDF0D8]  flex flex-col items-start">
              <span className='font-medium mr-1'>Github: </span> <span>aleama01</span>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alessandro-amandonico/' className="text-[#EDF0D8]  flex flex-col items-start">
              <span className='font-medium mr-1'>Linkedin: </span> <span>alessandro-amandonico</span>
            </a>
          </li>
        </ul>
      </div>
    )
  } else {
    return (
      <div className='flex flex-row justify-center text-[#EDF0D8] items-start py-[5vh] h-screen' >
        <div className='flex-col basis-2/5 flex justify-center items-center space-y-2 relative' >
          <div className='h-[450px] w-[400px] bg-center bg-no-repeat bg-cover duration-200 z-10 '
            style={{ backgroundImage: `url(/me.jpg)` }} />
        </div>


        <div className='basis-3/5 pl-[2vw] flex flex-col space-y-2'>
          <h2 className='font-bold' >
            HEY!
          </h2>

          <div className='text-justify'>
            Hi, my name is Alessandro :)<br />it&#39;s difficult to summarize myself in such few words, but I&#39;ll try.<br /><br />

            I like writing (whenever I have time to do that) about my life and interactions I have with my surroundings. I love backpacking to places where I can feel connected with nature, and I recently started doing birdwatching.<br /> Also, I often spend all my day listening to music, I have a lot of instruments which I&#39;ve not yet to learn how to play, but still I love experimenting with them.<br /><br />
            I&#39;ve completed my bachelor&#39;s in Computer Science Engineering (Politecnico di Milano) and now I&#39;m studying for a double degree master&#39;s in Human-Computer Interaction and UX/UI Design. After my entry year at Aalto University in Finland, I am now studying at KTH in Stockholm, which means that I will still have to survive the dark and cold Scandinavian nights of winter for one year :).<br /><br />
            To get to know me better, check my social media. Or just text me, I would appreciate it better :)<br />
          </div>
          <ul className='flex flex-col justify-center flex-wrap gap-2 pt-4'>
            <li>
              <a target="_blank" rel="noreferrer" href='https://www.instagram.com/alessandro_amandonico/' className="text-[#EDF0D8]  flex flex-row items-center">
                <span className='font-medium mr-1'>Instagram: </span> @alessandro_amandonico
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href='https://github.com/aleama01' className="text-[#EDF0D8]  flex flex-row items-center">
                <span className='font-medium mr-1'>Github: </span> aleama01
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alessandro-amandonico/' className="text-[#EDF0D8]  flex flex-row items-center">
                <span className='font-medium mr-1'>Linkedin: </span> alessandro-amandonico
              </a>
            </li>
          </ul>

        </div>
      </div>
    )
  }
}
