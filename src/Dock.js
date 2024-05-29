// src/Dock.js
import React from 'react';
import styled from 'styled-components';
import profile from './icon/profile.png';
// import icon_16 from './icon/16.png';
import github from './icon/github.png';
import velog from './icon/velog.png';
import notion from './icon/notion.png';
import portfolio from './icon/portfolio.png';

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
`;

const DockContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const DockIcon = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2) translateY(-30%);
  }

  &:hover span {
    opacity: 1;
    transform: translateY(-120px);
  }
`;

const IconImage = styled.img`
  width: 192px;
  height: 192px;
`;

const IconLabel = styled.span`
  position: absolute;
  bottom: 80px; /* Adjusted to avoid overlap */
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 2px 8px;
  border-radius: 5px;
  font-size: 2rem;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(0);
  transition: all 0.2s;
`;

const icons = [
  { src: profile, alt: 'Profile', window: 'profile' },
  { src: portfolio, alt: 'Portfolio', window: 'portfolio' },
  { src: github, alt: 'GitHub', url: 'https://github.com/jolennon77' },
  { src: velog, alt: 'Blog', url: 'https://velog.io/@jolennon/posts' },
  { src: notion, alt: 'Notion', url: 'https://www.notion.so/Hi-I-m-HJ-25a87b9cce5046f5a44f107e4212c22d' },
];

const Dock = ({ onOpenWindow }) => {
  const handleClick = (icon) => {
    if (icon.window) {
      onOpenWindow(icon.window);
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
