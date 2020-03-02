import React from 'react';
import RepoCard from './repo-card.component';
import { ReposContainer } from './repos.styles';

const Repos = ({ data }) => {
  return (
    <ReposContainer>
      {data.map(repo => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </ReposContainer>
  );
};

export default Repos;
