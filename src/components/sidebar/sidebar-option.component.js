import React from 'react';
import { SidebarOptionContainer } from './sidebar-option.styles';

const SidebarOption = ({ icon, name, handleClick, isPressed }) => (
  <SidebarOptionContainer
    className={`${isPressed ? 'pressed' : ''} sidebar-option`}
    value={name}
    onClick={() => handleClick(name)}
  >
    {icon}
    {name}
  </SidebarOptionContainer>
);

export default SidebarOption;
