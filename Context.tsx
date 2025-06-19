import * as React from 'react'
import { IContext } from './interfaces';

interface Props {
  children: React.ReactNode;
}

export const Context = React.createContext<IContext>({
  openSideMenu: false,
  setOpenSideMenu(_config) { },
  mobile: false,
  setMobile(_config) { },
  openProjectModal: "",
  setOpenProjectModal(_config) { },
  expandStory: false,
  setExpandStory(_config) { },
  showContent: "homepage",
  setShowContent(_config) { },
  flippedIdx: null,
  setFlippedIdx(_config) { },
  isAnimating: false,
  setIsAnimating(_config) { },
})

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = React.useState<boolean>(false);
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [openProjectModal, setOpenProjectModal] = React.useState<string>("");
  const [expandStory, setExpandStory] = React.useState<boolean>(false);
  const [showContent, setShowContent] = React.useState<string>("homepage");
  const [flippedIdx, setFlippedIdx] = React.useState<string | null>(null);
  const [isAnimating, setIsAnimating] = React.useState<boolean>(false);

  return (
    <Context.Provider
      value={{
        openSideMenu,
        setOpenSideMenu,
        mobile,
        setMobile,
        openProjectModal,
        setOpenProjectModal,
        expandStory,
        setExpandStory,
        showContent,
        setShowContent,
        flippedIdx,
        setFlippedIdx,
        isAnimating,
        setIsAnimating,
      }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;