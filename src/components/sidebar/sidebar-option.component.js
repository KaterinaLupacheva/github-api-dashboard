import React from 'react';
import './sidebar-option.styles.scss';

const SidebarOption = ({ icon, name, handleClick, isPressed }) => (
  <li
    className={`${isPressed ? 'pressed' : ''} sidebar-option`}
    value={name}
    onClick={() => handleClick(name)}
  >
    {icon}
    {name}
  </li>
);

export default SidebarOption;
