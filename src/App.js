// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ProfileWindow from './component/ProfileWindow';
import PortfolioWindow from './component/PortfolioWindow';
import PortfolioDetail from './component/PortfolioDetail';
import Dock from './Dock';
import { WindowProvider, useWindow } from './WindowContext';
import './App.css';
import './animations.css'; // 애니메이션 스타일을 포함할 CSS 파일

const AppContent = () => {
  const { openWindow, openProject } = useWindow();

  const renderWindow = () => {
    if (openProject) {
      return <PortfolioDetail projectId={openProject} />;
    }

    switch (openWindow) {
      case 'profile':
        return <ProfileWindow />;
      case 'portfolio':
        return <PortfolioWindow />;
      default:
        return null;
    }
  };

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2196F3',
      },
      secondary: {
        main: '#dc004e',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <TransitionGroup>
          {openWindow && (
            <CSSTransition key={openWindow} timeout={300} classNames="fade" unmountOnExit>
              {renderWindow()}
            </CSSTransition>
          )}
        </TransitionGroup>
        <Dock />
      </div>
    </ThemeProvider>
  );
};

const App = () => (
  <WindowProvider>
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  </WindowProvider>
);

export default App;
