import React from 'react'
import Link from 'next/link'
import { BsArrowLeft } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'

/**
 * Container of all the elements shown in the about me page.
 * 
 * @returns {ReactNode} A react component with a presentation of the author with a text, image and all social media links.
 */
export const AboutMe = () => {

  return (
    <div className='flex flex-col sm:flex-row justify-center text-[#ffffe9] items-center min-h-screen px-[5vw] space-y-4 pb-6' >

      <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/`} className='fixed font-thin left-2 sm:left-14 text-3xl top-2 sm:text-[32px] z-50' aria-label="Go back to homepage">
        <BsArrowLeft />
      </Link>

      <div className='flex-col flex justify-center items-start  sm:basis-1/3 space-y-6 sm:space-y-2 pt-2 relative' >

        <div className='h-[230px] w-[270px] sm:h-[300px] sm:w-[350px] bg-center bg-no-repeat bg-cover duration-200  mt-10 z-10 '
          style={{ backgroundImage: `url(/me.jpg)` }} />

        <ul className='hidden sm:flex text-sm flex-row space-x-4 items-end'>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/alessandro_amandonico/' className="text-[#c8c8b6] underline flex flex-row items-center">
              Instagram
              <HiOutlineExternalLink className=' scale-120 ml-1' />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/aleama01' className="text-[#c8c8b6] underline flex flex-row items-center">
              Github
              <HiOutlineExternalLink className=' scale-120 ml-1' />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alessandro-amandonico/' className="text-[#c8c8b6] underline flex flex-row items-center">
              Linkedin
              <HiOutlineExternalLink className=' scale-120 ml-1' />
            </a>
          </li>
        </ul>
      </div>


      <div className='sm:basis-1/3  flex flex-col space-y-2'>
        <h1 className='text-center text-[30px] sm:w-4/5 sm:text-left mx-auto mt-2 sm:mt-10 ' >
          ABOUT ME
        </h1>

        <div className='mx-auto text-justify text-sm w-5/6 sm:w-4/5'>
          Hi, my name is Alessandro :)<br />it&#39;s difficult to summarize myself in such few words, but I&#39;ll try.<br /><br />

          I like writing (whenever I have time to do that) about my life and interactions I have with my surroundings. I love backpacking to places where I can feel connected with nature, and I recently started doing birdwatching.<br /> Also, I often spend all my day listening to music, I have a lot of instruments which I&#39;ve not yet to learn how to play, but still I love experimenting with them.<br /><br />
          I&#39;ve completed my bachelor&#39;s in Computer Science Engineering (Politecnico di Milano) and now I&#39;m studying for a double degree master&#39;s in Human-Computer Interaction and UX/UI Design. After my entry year at Aalto University in Finland, I am now studying at KTH in Stockholm, which means that I will still have to survive the dark and cold Scandinavian nights of winter for one year :).<br /><br />
          To get to know me better, check my social media. Or just text me, I would appreciate it better :)<br />
        </div>
        <ul className='sm:hidden flex flex-row w-full justify-center flex-wrap gap-4 pt-8'>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.instagram.com/alessandro_amandonico/' className="text-[#c8c8b6] underline flex flex-row items-center">
              Instagram
              <HiOutlineExternalLink className=' scale-120 ml-1' />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://github.com/aleama01' className="text-[#c8c8b6] underline flex flex-row items-center">
              Github
              <HiOutlineExternalLink className=' scale-120 ml-1' />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/alessandro-amandonico/' className="text-[#c8c8b6] underline flex flex-row items-center">
              Linkedin
              <HiOutlineExternalLink className=' scale-120 ml-1' />
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}
