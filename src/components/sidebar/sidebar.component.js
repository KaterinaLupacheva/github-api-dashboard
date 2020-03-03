import React from 'react';
import SidebarOption from './sidebar-option.component';
import SIDEBAR_OPTIONS from './sidebar-options.data';

import './sidebar.styles.scss';

const Sidebar = ({ children }) => (
  <>
    <div className="sidebar-container">
      <header>{'Dashboard'}</header>
      <ul>
        {SIDEBAR_OPTIONS.map(option => (
          <SidebarOption key={option.id} icon={option.icon} name={option.name} />
        ))}
      </ul>
    </div>
    <section>{children}</section>
  </>
);

export default Sidebar;
