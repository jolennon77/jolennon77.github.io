// src/App.js
import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileWindow from './component/ProfileWindow';
import PortfolioWindow from './component/PortfolioWindow';
import Dock from './Dock';
import './App.css';
import './animations.css'; // 애니메이션 스타일을 포함할 CSS 파일

const App = () => {
  const [openWindow, setOpenWindow] = useState(null);

  const handleOpenWindow = (windowName) => {
    setOpenWindow((prevWindowName) => (prevWindowName === windowName ? null : windowName));
  };

  const renderWindow = () => {
    switch (openWindow) {
      case 'profile':
        return <ProfileWindow onClose={() => setOpenWindow(null)} />;
      case 'portfolio':
        return <PortfolioWindow onClose={() => setOpenWindow(null)} />;
      default:
        return null;
    }
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2196F3', //백
      },
      secondary: {
        main: '#dc004e', // 프론트
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },

  });

  return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
        <TransitionGroup>
          {openWindow && (
              <CSSTransition
                  key={openWindow}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
              >
                {renderWindow()}
              </CSSTransition>
          )}
        </TransitionGroup>
        <Dock onOpenWindow={handleOpenWindow} />
        </ThemeProvider>
      </div>
  );
};

export default App;