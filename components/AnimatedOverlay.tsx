// components/AnimatedOverlay.tsx
import { motion } from 'framer-motion';
import { useTransition } from './TransitionProvider';

const placeholderImages = [
  'projects.JPG',
  'projects.JPG',
  'projects.JPG',
];

export const getOverlayContent = (page: string) => {
  switch (page) {
    case 'diary':
      return ['Memories', 'Handwritten', 'Personal'];
    case 'postcards':
      return ['Travel', 'Moments', 'Color'];
    case 'projects':
      return ['Ideas', 'Experiments', 'Builds'];
    case 'about':
      return ['Me', 'History', 'Connections'];
    default:
      return ['Loading', '...', '...'];
  }
};

export default function AnimatedOverlay() {
  const { targetPage } = useTransition();
  const textList = getOverlayContent(targetPage);

  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-full bg-black z-50 flex items-center justify-center gap-6 px-6"
      initial={{ x: '100%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {textList.map((text, idx) => (
        <div key={idx} className="text-white text-center">
          <img src={placeholderImages[idx]} alt={text} className="mb-2 w-40 h-24 object-cover" />
          <p className="text-sm">{text}</p>
        </div>
      ))}
    </motion.div>
  );
}
