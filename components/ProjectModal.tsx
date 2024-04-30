import React, { useContext } from 'react'
import { MdClose } from 'react-icons/md';
import { Context } from '../Context';
import Image from 'next/image';


/**
 * Project modal component that displays details about the project.
 * 
 * @param project project details such as text, images and title.
 * @returns {ReactNode} A react component displaying all the details of a project: text, images and title of the project.
 */
const ProjectModal = ({ project }: { project: any }) => {
  const { openProjectModal, setOpenProjectModal } = useContext(Context);

  const handleClick = () => {
    setOpenProjectModal("")
  }

  // Function to transform text from post body to HTML components
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>)
      }
      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>)
      }
      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }
    }


    switch (type) {
      case 'heading-three':
        return <h3 key={index} className='mb-3 px-2'>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>
      case 'paragraph':
        return <p key={index} className='mb-3 px-2'>{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>
      case 'heading-four':
        return <h4 key={index} className="mb-4 px-2">{modifiedText.map((item: any, i: React.Key) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            className='my-4 lg:my-8 mx-auto '
            key={index}
            alt={obj.title}
            height={obj.height * 0.4}
            width={obj.width * 0.4}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }


  return (
    <div className='fixed flex flex-col justify-center inset-0 duration-200 bg-cover z-[60] text-black bg-[#1e1e1eb8] ' style={{ opacity: openProjectModal === project.title ? '1' : '0', pointerEvents: openProjectModal === project.title ? 'auto' : 'none' }}>
      <div className=' mx-[2vw] max-h-[80vh] sm:max-h-[90vh] flex relative flex-col justify-start bg-[#ffffe9] overflow-y-scroll'>

        <div className='flex flex-row justify-between items-center sticky p-2'>
          <div className='flex flex-col leading-none'>
            <h1 className='text-[7vw] overflow-hidden sm:text-[3vw] text-left'>{project.title.toUpperCase()}</h1>
            <p className='text-left text-[#363631] text-sm font-extralight'>{project.excerpt}</p>
          </div>
          <button aria-label='Close project modal' className='font-thin text-2xl  sm:text-[32px] '
            onClick={() => (handleClick())}>
            <MdClose />
          </button>
        </div>

        <div className='whitespace-normal overflow-y-scroll pt-8 flex flex-row flex-wrap'>

          <div className='w-full text-sm'>
            {project.content.raw.children.map((typeObj: any, index: any) => {
              const children = typeObj.children.map((item: any, itemIndex: any) => getContentFragment(itemIndex, item.text, item, typeObj))
              return getContentFragment(index, children, typeObj, typeObj.type)
            })}
          </div>

          {project.images.map((image: any, idx: any) => {
            return (
              <div className=' z-10 basis-1/2 sm:basis-1/3' key={image.url}>
                <Image
                  width={720}
                  height={720}
                  sizes="(max-width: 768px) 50vw,33vw"
                  alt={'image'}
                  className='h-[200px] sm:h-[500px] object-cover'
                  src={image.url}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div >
  )
}

export default ProjectModal