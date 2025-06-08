export interface IContext {
  openSideMenu: boolean;
  setOpenSideMenu: (config: boolean) => void;
  mobile: boolean;
  setMobile: (config: boolean) => void;
  openProjectModal: string;
  setOpenProjectModal: (config: string) => void;
  expandStory: boolean;
  setExpandStory: (config: boolean) => void;
  showContent: boolean;
  setShowContent: (config: boolean) => void;
  flippedIdx: string | null;
  setFlippedIdx: (config: string | null) => void;
  isAnimating: boolean;
  setIsAnimating: (config: boolean) => void;
};