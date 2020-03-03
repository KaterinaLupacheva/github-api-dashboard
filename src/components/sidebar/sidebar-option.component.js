import React from 'react';
import './sidebar-option.styles.scss';

const handleClick = e => {
  console.log('Click ' + e);
};

const SidebarOption = ({ icon, name }) => (
  <li className="sidebar-option" value={name} onClick={() => handleClick(name)}>
    {icon}
    {name}
  </li>
);

export default SidebarOption;
