import Link from 'next/link'
import React from 'react'
import PlacePost from './PlacePost'

/**
 * Gallery component of the photos section of the website showing the list of places the user can watch the photos of.
 * 
 * @param places list of photos of the different places
 * @returns {ReactNode} A react component with a gallery of places the user can watch the photos of. Each place can be selected to watch the photos in detail.
 */
const PhotosGallery = ({ places }: { places: Array<any> }) => {
  return (
    <div className='flex flex-col min-h-screen py-[5vh] w-full justify-around gap-y-6 items-center'>
      {places.map((place) => (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} href={`/sections/photos/${place.node.slug}`} key={place.node.title} >
          <PlacePost place={place.node} />
        </Link>
      ))}
    </div>
  )
}

export default PhotosGallery