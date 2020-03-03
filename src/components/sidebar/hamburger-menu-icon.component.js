import React from 'react';
import { GoThreeBars } from 'react-icons/go';
import { GoX } from 'react-icons/go';
import './hamburger-menu-icon.styles.scss';

const HamburgerMenuIcon = () => (
  <>
    <input type="checkbox" id="check" defaultChecked />
    <label htmlFor="check">
      <GoThreeBars id="btn" />
      <GoX id="cancel" />
    </label>
  </>
);

export default HamburgerMenuIcon;
