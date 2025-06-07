import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ContextProvider, { Context } from '../Context'
import Head from 'next/head'
import SideMenu from '../components/SideMenu'
import Footer from '../components/Footer'
import React, { useState, useEffect, useRef, useContext } from 'react';
import { motion, useScroll, AnimatePresence, useTransform, useAnimation } from "framer-motion"
import { useRouter } from 'next/navigation';
import { isMobile } from "../scripts/isMobile";
import { usePathname } from 'next/navigation';
import { TransitionProvider, useTransition } from '../components/TransitionProvider';
import SideMenuButton from "../components/SideMenuButton";
import Layout from '../components/Layout'
import Menu from '../components/Menu'


const menuDirectionMap = {
  homepage: { x: '50dvw', y: '50dvh', translateX: '-50%', translateY: '-50%' },
  diary: { x: '20vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
  postcards: { x: '20vw', y: '80vh', translateX: '-50%', translateY: '-50%' },
  projects: { x: '80vw', y: '50vh', translateX: '-50%', translateY: '-50%' },
  music: { x: '20vw', y: '5vh', translateX: '-50%', translateY: '-50%' },
  about: { x: '20vw', y: '20vh', translateX: '-50%', translateY: '-50%' },
};

const overlayDirectionMap = {
  diary: { x: '40vw', y: 0 },
  postcards: { x: 0, y: 0 },
  projects: { x: '60vw', y: 0 },
  music: { x: '80vw', y: 0 },
  about: { x: '-60vw', y: 0 },
};

type SectionKey = keyof typeof menuDirectionMap;


/**
 * Main entry of the website, contains route, head component and context provider. 
 * 
 * @returns The main wrapper of the whole website. 
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <TransitionProvider>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#EDF0D8" />
          <title>Amandocino</title>
          <meta name="description" content="Dive in and get to know me, read my posts, watch my photos, look at what my friends do, watch the projects I work on." />
        </Head>
        <Layout Component={Component} pageProps={pageProps} />
      </TransitionProvider>
    </ContextProvider>
  )
}
