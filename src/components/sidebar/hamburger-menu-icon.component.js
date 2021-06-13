import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { GoX } from 'react-icons/go';
import { HamburgerContainer } from './hamburger-icon.styles';

const HamburgerMenuIcon = ({ isOpen, toggleMenu }) => (
  <HamburgerContainer isOpen={isOpen} onClick={toggleMenu}>
    <GoThreeBars id="btn" />
    <GoX id="cancel" />
  </HamburgerContainer>
);

export default HamburgerMenuIcon;
