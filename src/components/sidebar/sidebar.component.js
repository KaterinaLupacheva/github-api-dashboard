import React from 'react';
import SidebarOption from './sidebar-option.component';
import SIDEBAR_OPTIONS from './sidebar-options.data';

import './sidebar.styles.scss';

const Sidebar = ({
  children,
  handleClick,
  languagesIsPressed,
  reposIsPressed,
  userIsPressed,
  user,
}) => {
  const handleIsPressed = name => {
    if (languagesIsPressed && name === 'Languages') {
      return true;
    } else if (userIsPressed && name === 'User') {
      return true;
    } else if (reposIsPressed && name === 'Repositories') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className="sidebar-container">
        <header>{user}</header>
        <ul>
          {SIDEBAR_OPTIONS.map(option => (
            <SidebarOption
              key={option.id}
              icon={option.icon}
              name={option.name}
              handleClick={handleClick}
              isPressed={handleIsPressed(option.name)}
            />
          ))}
        </ul>
      </div>
      <section>{children}</section>
    </>
  );
};

export default Sidebar;
