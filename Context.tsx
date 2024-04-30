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
})

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [openSideMenu, setOpenSideMenu] = React.useState<boolean>(false);
  const [mobile, setMobile] = React.useState<boolean>(false);
  const [openProjectModal, setOpenProjectModal] = React.useState<string>("");
  return (
    <Context.Provider
      value={{
        openSideMenu,
        setOpenSideMenu,
        mobile,
        setMobile,
        openProjectModal,
        setOpenProjectModal,
      }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;