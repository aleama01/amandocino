export interface IContext {
  openSideMenu: boolean;
  setOpenSideMenu: (config: boolean) => void;
  mobile: boolean;
  setMobile: (config: boolean) => void;
  openProjectModal: string;
  setOpenProjectModal: (config: string) => void;
};