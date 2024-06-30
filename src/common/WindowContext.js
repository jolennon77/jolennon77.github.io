// src/WindowContext.js
import React, { createContext, useContext, useState } from 'react';

const WindowContext = createContext();

export const useWindow = () => {
  return useContext(WindowContext);
};

export const WindowProvider = ({ children }) => {
  const [openWindow, setOpenWindow] = useState(null);
  const [openProject, setOpenProject] = useState(null);
  const [previousWindows, setPreviousWindows] = useState([]);

  const handleOpenWindow = (windowName) => {
    if (openWindow === windowName) {
      setOpenWindow(null);
      setOpenProject(null);
      setPreviousWindows([]);
    } else {
      if (openWindow || openProject) {
        setPreviousWindows([...previousWindows, { openWindow, openProject }]);
      }
      setOpenWindow(windowName);
      setOpenProject(null);
    }
  };

  const handleOpenProject = (projectId) => {
    if (openWindow || openProject) {
      setPreviousWindows([...previousWindows, { openWindow, openProject }]);
    }
    setOpenProject(projectId);
    setOpenWindow('portfolio');
  };

  const handleGoBack = () => {
    if (previousWindows.length > 0) {
      const { openWindow: prevOpenWindow, openProject: prevOpenProject } = previousWindows.pop();
      setOpenWindow(prevOpenWindow);
      setOpenProject(prevOpenProject);
      setPreviousWindows([...previousWindows]);
    }
  };

  const handleCloseWindow = () => {
    setOpenWindow(null);
    setOpenProject(null);
    setPreviousWindows([]);
  };

  return (
    <WindowContext.Provider value={{ openWindow, openProject, handleOpenWindow, handleOpenProject, handleGoBack, handleCloseWindow }}>
      {children}
    </WindowContext.Provider>
  );
};
