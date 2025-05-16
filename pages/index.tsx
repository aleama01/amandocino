import Homepage from '../components/Homepage'

/**
 * Main component of homepage.
 * 
 * @returns {ReactNode} The Homepage react component.
 */
export default function Home({ showContent = true }: { showContent?: boolean }) {
  return (
    <Homepage showContent={showContent} />
  )
}

