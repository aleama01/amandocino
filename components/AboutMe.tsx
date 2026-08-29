import React, { useContext } from 'react'
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
            <br /><br />
            I&#39;m currently living in Stockholm, working as a fullstack developer for DigiProc. I've a bachelor&#39;s degree in computer science engineering and a master&#39;s degree in human computer interaction and design, but if you want to know more about my academical and work experience you can check my LinkedIn :)
            <br /><br />
            I enjoying being creative, whether it's through coding, design, or handcraft. I like to question things, keep things in order, being ergonomic. My ultimate goal is to create things that are useful and have a purpose in improving people&#39;s lives or society.
            <br /><br />
            Sometimes I write stuff here, I do birdwatching and enjoy spending time in nature in general. This helps find inspiration and recharge my batteries.
            <br /><br />
            Feel free to contact me :)
          </div>
        </div>
        <div className='h-[200px] w-[300px] self-end bg-center bg-no-repeat bg-cover duration-200 z-10 '
          style={{ backgroundImage: `url(/about.jpeg)` }} />

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
            style={{ backgroundImage: `url(/about.jpeg)` }} />
        </div>


        <div className='basis-3/5 pl-[2vw] flex flex-col space-y-2'>
          <h2 className='font-bold' >
            HEY!
          </h2>

          <div className=''>
            My name&#39;s Alessandro :)
            <br /><br />
            I&#39;m currently living in Stockholm, working as a fullstack developer for DigiProc. I've a bachelor&#39;s degree in computer science engineering and a master&#39;s degree in human computer interaction and design, but if you want to know more about my academical and work experience you can check my LinkedIn :)
            <br /><br />
            I enjoying being creative, whether it's through coding, design, or handcraft. I like to question things, keep things in order, being ergonomic. My ultimate goal is to create things that are useful and have a purpose in improving people&#39;s lives or society.
            <br /><br />
            Sometimes I write stuff here, I do birdwatching and enjoy spending time in nature in general. This helps find inspiration and recharge my batteries.
            <br /><br />
            Feel free to contact me :)
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
