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

          <div className=''>
            My name&#39;s Alessandro :)
            <br />
            I just want to give an overview of who I am, what I am doing and what I care about.
            <br /><br />
            I&#39;m a Master&#39;s student of the EIT Digital program in Human-Computer Interaction and Design, currently working on my thesis following my studies in Aalto University and KTH. After one year and a half of cold Scandinavian weather I am now in Stuttgart, as an intern for the Human-Centred AI research team in Porsche. Cool stuff.
            <br /><br />
            I enjoying creating and building things from scratch. Creativity and purpose are the things that motivate me, both in the work environment and outside. I love arts and I love to solve problems.
            <br /><br />
            Sometimes I write things. My most recent hobby is birdwatching. I love nature and try to find inspiration from there. But I guess the best way to understand who I am is checking my socials.
            <br />
            (I am trying to keep it short that&#39;s why the short sentences)
            <br /><br />
            Feel free to contact me for any reason :)
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
      <div className='flex flex-row justify-center text-[#EDF0D8] items-start py-[5dvh] h-[100dvh]' >
        <div className='flex-col basis-2/5 flex justify-center items-center space-y-2 relative' >
          <div className='h-[450px] w-[400px] bg-center bg-no-repeat bg-cover duration-200 z-10 '
            style={{ backgroundImage: `url(/me.jpeg)` }} />
        </div>


        <div className='basis-3/5 pl-[2vw] flex flex-col space-y-2'>
          <h2 className='font-bold' >
            HEY!
          </h2>

          <div className=''>
            My name&#39;s Alessandro :)
            <br />
            I just want to give an overview of who I am, what I am doing and what I care about.
            <br /><br />
            I&#39;m a Master&#39;s student of the EIT Digital program in Human-Computer Interaction and Design, currently working on my thesis following my studies in Aalto University and KTH. After one year and a half of cold Scandinavian weather I am now in Stuttgart, as an intern for the Human-Centred AI research team in Porsche. Cool stuff.
            <br /><br />
            I enjoying creating and building things from scratch. Creativity and purpose are the things that motivate me, both in the work environment and outside. I love arts and I love to solve problems.
            <br /><br />
            Sometimes I write things. My most recent hobby is birdwatching. I love nature and try to find inspiration from there. But I guess the best way to understand who I am is checking my socials.
            <br />
            (I am trying to keep it short that&#39;s why the short sentences)
            <br /><br />
            Feel free to contact me for any reason :)
          </div>
          <ul className='flex flex-col mr-auto justify-center flex-wrap gap-2 pt-4'>
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
