import React from 'react';
import styled from 'styled-components';

const EasterEggContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 10px;
  color: white;
  text-align: center;
  z-index: 1000;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #2196F3;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover {
    background: #1976D2;
  }
`;

const EasterEgg = ({ onClose }) => {
    return (
        <EasterEggContainer>
            <h2>Surprise!</h2>
            <p>You found the Easter Egg!</p>
            <CloseButton onClick={onClose}>Close</CloseButton>
        </EasterEggContainer>
    );
};

export default EasterEgg;
