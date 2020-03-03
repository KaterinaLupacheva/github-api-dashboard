import React from 'react';
import './sidebar-option.styles.scss';

const SidebarOption = ({ icon, name }) => (
  <li className="sidebar-option-container">
    <a className="sidebar-option" href="#">
      {icon}
      {name}
    </a>
  </li>
);

export default SidebarOption;
