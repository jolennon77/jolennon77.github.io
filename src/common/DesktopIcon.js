import React from 'react';
import './DesktopIcon.css';

const DesktopIcon = ({ icon, label, onClick }) => {
    return (
        <div className="IconContainer" onClick={onClick}>
            <img className="IconImage" src={icon} alt={label} />
            <div className="IconLabel">{label}</div>
        </div>
    );
};

export default DesktopIcon;
