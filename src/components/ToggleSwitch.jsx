import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isDarkMode} onChange={onToggle} />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
