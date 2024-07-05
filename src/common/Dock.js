// src/Dock.js
import React from 'react';
import styled from 'styled-components';
import { useWindow } from './WindowContext';
import profile from '../icon/profile.png';
import github from '../icon/github.png';
import velog from '../icon/velog.png';
import notion from '../icon/notion.png';
import portfolio from '../icon/portfolio.png';

const DockWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px 10px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  z-index: 20;
  @media (max-width: 768px) {
    padding: 10px 0;
    bottom: 10px;
    width: 90%;
  }
`;

const DockContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const DockIcon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  transition: transform 0.2s;
  @media (max-width: 768px) {
    margin: 0 5px;
  }

  &:hover {
    transform: scale(1.2) translateY(-30%);
  }

  &:hover span {
    opacity: 1;
    transform: translateY(-80px);
    @media (max-width: 768px) {
      transform: translateY(-40px);
    }
  }
`;

const IconImage = styled.img`
  width: 128px;
  height: 128px;
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const IconLabel = styled.span`
  position: absolute;
  bottom: 65px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 1rem;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(0);
  transition: all 0.2s;
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
  }
  @media (max-width: 768px) {
    font-size: 0.75rem;
    bottom: 20px;
    &:after {
      bottom: -10px;
    }
  }
`;

const icons = [
  { src: profile, alt: 'Profile', window: 'profile' },
  { src: portfolio, alt: 'Portfolio', window: 'portfolio' },
  { src: github, alt: 'GitHub', url: 'https://github.com/jolennon77' },
  { src: velog, alt: 'Blog', url: 'https://velog.io/@jolennon/posts' },
  { src: notion, alt: 'Notion', url: 'https://www.notion.so/Hi-I-m-HJ-25a87b9cce5046f5a44f107e4212c22d' },
];

const Dock = () => {
  const { handleOpenWindow } = useWindow();

  const handleClick = (icon) => {
    if (icon.window) {
      handleOpenWindow(icon.window);
    } else if (icon.url) {
      window.open(icon.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <DockWrapper>
      <DockContainer>
        {icons.map((icon, index) => (
          <DockIcon key={index} onClick={() => handleClick(icon)}>
            <IconImage src={icon.src} alt={icon.alt} />
            <IconLabel>{icon.alt}</IconLabel>
          </DockIcon>
        ))}
      </DockContainer>
    </DockWrapper>
  );
};

export default Dock;
