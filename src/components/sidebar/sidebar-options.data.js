import React from 'react';

import { GoPerson } from 'react-icons/go';
import { GoBook } from 'react-icons/go';
import { GoRepo } from 'react-icons/go';
import { GiShadowFollower } from 'react-icons/gi';

const SIDEBAR_OPTIONS = [
  {
    id: 1,
    icon: <GoPerson />,
    name: 'User',
  },
  {
    id: 2,
    icon: <GoBook />,
    name: 'Languages',
  },
  {
    id: 3,
    icon: <GoRepo />,
    name: 'Repositories',
  },
  {
    id: 4,
    icon: <GiShadowFollower />,
    name: 'Followers',
  },
];

export default SIDEBAR_OPTIONS;
