export const mockUser = {
  name: 'Jane Doe',
  avatar_url: 'https://i.ibb.co/q0G7Bpq/emoticon-1610228-640.png',
  html_url: 'https://github.com/',
  login: 'JaneDoe',
  bio: 'Super developer',
  company: 'BestComp',
  location: 'Earth',
  blog: 'https://www.google.com/',
  created_at: '2010-10-10T04:33:35Z',
  followers: 100,
  public_repos: 4,
};

export const mockRepos = [
  {
    id: 1,
    name: 'cool-repo',
    fork: false,
    homepage: 'https://github.com',
    description: 'Very cool project.',
    stargazers_count: 250,
    forks: 50,
    language: 'Javascript',
    created_at: '2015-05-20T19:01:12Z',
    open_issues_count: 7,
    license: {
      spdx_id: 'MIT',
    },
    updated_at: '2020-01-20T19:01:12Z',
  },
  {
    id: 2,
    name: 'react',
    fork: true,
    homepage: 'http://reactjs.org/',
    description:
      'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    stargazers_count: 145000,
    forks: 27900,
    language: 'Javascript',
    created_at: '2015-01-20T19:01:12Z',
    open_issues_count: 471,
    license: {
      spdx_id: 'MIT',
    },
    updated_at: '2020-03-10T19:01:12Z',
  },
  {
    id: 3,
    name: 'best-repo',
    fork: false,
    homepage: 'https://github.com',
    description: 'My best project.',
    stargazers_count: 543,
    forks: 87,
    language: 'Java',
    created_at: '2018-03-15T19:01:12Z',
    open_issues_count: 15,
    license: {
      spdx_id: 'MIT',
    },
    updated_at: '2020-02-12T19:01:12Z',
  },
  {
    id: 4,
    name: 'experiment',
    fork: false,
    homepage: null,
    description: 'My new experiment.',
    stargazers_count: 2,
    forks: 0,
    language: 'Javascript',
    created_at: '2020-01-20T19:01:12Z',
    open_issues_count: 0,
    license: {
      spdx_id: '',
    },
    updated_at: '2020-03-01T19:01:12Z',
  },
];

export const mockLanguages = {
  Javascript: 100200300,
  HTML: 200500702,
  CSS: 40030020,
  Java: 300500206,
  C: 20000020,
};

const repoDetails = {};
