import React from 'react';

import { GoPerson } from 'react-icons/go';
import { GoBook } from 'react-icons/go';
import { GoRepo } from 'react-icons/go';

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
];

export default SIDEBAR_OPTIONS;
