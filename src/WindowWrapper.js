import React from 'react';
import styled from 'styled-components';

const WindowContainer = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  width: 60%;
  height: 68%;
  background-color: #262626;
  border-radius: 12px;
  box-shadow: 0 4px 10px #262626;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  @media (max-width: 768px) {
    top: 0;
    width: 100%;
    height: 88%;
  }
`;

const WindowHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #262626;
  padding: 8px 12px;
  cursor: move;
`;

const WindowControls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-shrink: 0;
`;

const ControlButton = styled.button`
  width: 12px;
  height: 12px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
`;

const CloseButton = styled(ControlButton)`
  background-color: #ff5f57;
`;

const MinimizeButton = styled(ControlButton)`
  background-color: #ffbd2e;
`;

const MaximizeButton = styled(ControlButton)`
  background-color: #28c940;
`;

const MenuBar = styled.div`
  display: flex;
  background-color: #353535;
  padding: 2px 10px;
  border-bottom: 1px solid #353535;
  font-size: 14px;
  user-select: none;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const MenuItem = styled.div`
  margin-right: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  background-color: #353535;
  padding: 8px;
  border-bottom: 1px solid #353535;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  margin-right: 5px;
  cursor: pointer;
  color: #007aff;

  &:disabled {
    color: #a8a8a8;
  }
`;

const AddressBar = styled.input`
  flex-grow: 1;
  margin: 0 10px;
  padding: 4px 8px;
  border: 1px solid #262626;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  background-color: #262626;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const WindowContent = styled.div`
  flex-grow: 1;
  padding: 10px;
  background-color: #22252b;
  overflow: auto;
  @media (max-width: 768px) {
    padding: 5px;
  }
`;

const WindowWrapper = ({ children, onClose }) => {
  return (
      <WindowContainer>
        <WindowHeader>
          <WindowControls>
            <CloseButton onClick={onClose} />
            <MinimizeButton />
            <MaximizeButton />
          </WindowControls>
        </WindowHeader>
        <MenuBar>
          <MenuItem>File</MenuItem>
          <MenuItem>Edit</MenuItem>
          <MenuItem>View</MenuItem>
          <MenuItem>Favorites</MenuItem>
          <MenuItem>Tools</MenuItem>
          <MenuItem>Help</MenuItem>
        </MenuBar>
        <NavBar>
          <NavButton disabled>{'<'}</NavButton>
          <NavButton disabled>{'>'}</NavButton>
          <NavButton>{'🔄'}</NavButton>
          <AddressBar defaultValue="https://www.profile.com" />
        </NavBar>
        <WindowContent>
          {children}
        </WindowContent>
      </WindowContainer>
  );
};

export default WindowWrapper;
