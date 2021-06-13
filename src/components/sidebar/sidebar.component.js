import React from 'react';
import SidebarOption from './sidebar-option.component';
import SIDEBAR_OPTIONS from './sidebar-options.data';

import { SidebarContainer, SectionContainer } from './sidebar.styles';

const Sidebar = ({
  children,
  handleClick,
  languagesIsPressed,
  reposIsPressed,
  userIsPressed,
  user,
  isOpen,
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
      <SidebarContainer isOpen={isOpen}>
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
      </SidebarContainer>
      <SectionContainer isOpen={isOpen}>{children}</SectionContainer>
    </>
  );
};

export default Sidebar;
