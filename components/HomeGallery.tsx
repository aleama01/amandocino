import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link'
import React, { useState } from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SECTIONS } from '../services/constants';
import Image from 'next/image';

/**
 * Progress bar with dots under the gallery component in homepage.
 * 
 * @param index index of the current section selected in the gallery component
 * @returns {ReactNode} A react component that is a progress bar showing a dot for every section in the gallery component.
 */
const ProgressBar = ({ index }: { index: number }) => {
  return (
    <div className='flex flex-row space-x-2'>
      {SECTIONS.map((section, idx) => {
        return (
          <div key={idx} className={`rounded-full border-2 duration-300 ${index == idx ? 'border-[#ffffe9]' : 'border-[#c0c0ae]'}`} />
        )
      })}
    </div>
  )
}

/**
 * Gallery component in the homepage, used to browse and present the various sections of the website.
 * 
 * @returns {ReactNode} A react component gallery showing an image, a short description and a link to go to the page of the different sections.
 */
const HomeGallery = () => {
  const [index, setIndex] = useState(0);
  const controlsImage = useAnimation();
  const controlsText = useAnimation();

  const handleClickRight = async () => {
    controlsText.start({ opacity: 0 });
    await controlsImage.start({ translateX: `-${100 * ((index + 1) % SECTIONS.length)}%` }, { ease: 'easeInOut' });
    setIndex((index + 1) % SECTIONS.length);
    controlsText.start({ opacity: 1 });
  };

  const handleClickLeft = async () => {
    controlsText.start({ opacity: 0 });
    await controlsImage.start({ translateX: `-${100 * ((index + 3) % SECTIONS.length)}%` }, { ease: 'easeInOut' });
    setIndex((index + 3) % SECTIONS.length);
    controlsText.start({ opacity: 1 });
  };

  return (
    <div className="flex flex-col items-center w-screen md:w-[90vw] relative space-y-2 md:space-y-6">
      <div className="flex flex-row justify-between w-full h-[40vh] md:h-[60vh] items-center">

        <div className=" left-3 absolute text-[30px] pointer-events-auto z-20 cursor-pointer" onClick={handleClickLeft} aria-label="Scroll modal to previous section">
          <BsArrowLeftShort />
        </div>

        <div className='basis-3/4 hidden md:block' />

        <div className='absolute w-screen self-start  h-[40vh] md:h-[60vh] overflow-x-hidden md:w-[90vw]'>
          <div className="h-full absolute w-auto flex flex-row pointer-events-none select-none">
            {SECTIONS.map((elem, i) => (
              <motion.div
                key={i}
                className="relative w-screen md:w-[70vw]"
                initial={{ translateX: 0 }}
                animate={controlsImage}
              >
                <Image alt="" width={1024} height={1024} src={`${elem.image}`} className='w-full saturate-[0.8] h-full object-cover object-center' />
              </motion.div>
            ))}
          </div>
        </div>

        <div className='h-4/5 hidden  w-0 basis-0 mx-6 border-[0.5px] ' />

        <div
          className="relative hidden pl-4 pr-10 py-4 md:flex flex-col space-y-6 overflow-visible  bg-[#10100E] h-full basis-[25vw] "
        >
          <motion.div animate={controlsText}
            initial={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.5 } }}>

            <h1 className='text-[3vw] leading-none' >{SECTIONS[index].name.toUpperCase()}</h1>
          </motion.div>
          <motion.div
            className='grow'
            animate={controlsText}
            initial={{ opacity: 1 }}
            transition={{ opacity: { duration: 0.5 } }}>

            {SECTIONS[index].description.map(el => {
              return (
                <p key={el}>{el}</p>
              )
            })}


          </motion.div>

          <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/${SECTIONS[index].name}`} className="pointer-events-auto pb-6 z-30 leading-none ">
            <button aria-label={`Redirect to page ${SECTIONS[index].name}`} className='text-sm border-[1px] rounded-full hover:bg-[#ffffe9] duration-200 text-[#ffffe9] hover:text-black bg-transparent py-2 px-4' style={{ letterSpacing: '0.05rem' }}>
              go to {SECTIONS[index].name}
            </button>
          </Link>
        </div>

        <div className="absolute right-3 text-[30px] z-20 pointer-events-auto cursor-pointer" onClick={handleClickRight} aria-label="Scroll modal to next section">
          <BsArrowRightShort />
        </div>
      </div>

      <motion.div
        className="relative md:hidden flex mx-[10vw] flex-col space-y-2 self-start overflow-visible justify-start h-full basis-1/4 "
        animate={controlsText}
        initial={{ opacity: 1 }}
        transition={{ opacity: { duration: 0.5 } }}
      >
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/${SECTIONS[index].name}`} className="pointer-events-auto z-30 leading-none ">
          <h1 className='text-[6vw]'>{SECTIONS[index].name.toUpperCase()}</h1>
        </Link>
        <div className='text-sm h-[150px]'>
          {SECTIONS[index].description.map(el => {
            return (
              <p key={el} >{el}</p>
            )
          })}
        </div>
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`sections/${SECTIONS[index].name}`} className="self-center pointer-events-auto pb-6 z-30 leading-none ">
          <button aria-label={`Redirect to page ${SECTIONS[index].name}`} className='text-sm border-[1px] rounded-full hover:bg-[#ffffe9] duration-200 text-[#ffffe9] hover:text-black bg-transparent py-2 px-4' style={{ letterSpacing: '0.05rem' }}>
            go to {SECTIONS[index].name}
          </button>
        </Link>
      </motion.div>

      <ProgressBar index={index} />
    </div>
  );
};

export default HomeGallery;
