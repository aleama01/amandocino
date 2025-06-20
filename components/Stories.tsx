import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import Story from './Story';
import { useTransition } from './TransitionProvider';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Context } from '../Context';

export const Stories = ({ stories, onStoryClick }: { stories: Array<any>, onStoryClick: Function }) => {
  const parentRef = React.useRef<HTMLDivElement>(null);
  const { mobile } = useContext(Context)

  const virtualizer = useVirtualizer({
    count: stories.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => mobile ? 230 : 330, // height of story + gap
    overscan: 6 // number of items to render above/below viewport
  });

  return (
    <div
      ref={parentRef}
      className='flex flex-col w-full h-[100dvh] my-1 lg:pb-0 lg:my-[2dvh] overflow-auto'
    >
      <div
        style={{
          height: `${virtualizer.getTotalSize()}px`,
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const story = stories[virtualItem.index];
          return (
            <div
              key={story.node.title}
              style={{
                position: 'absolute',
                top: 0,
                transform: `translateY(${virtualItem.start}px)`,
                width: '100%',
              }}
              onClick={() => onStoryClick(story.node.slug)}
            >
              <Story
                story={story.node}
                idx={virtualItem.index}
                isVisible={virtualItem.index === virtualItem.index}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};