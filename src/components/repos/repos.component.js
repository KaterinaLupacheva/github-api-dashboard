import React from 'react';
import RepoCard from './repo-card.component';
import { ReposContainer } from './repos.styles';

const Repos = props => {
  return (
    <ReposContainer>
      {props.data.map(repo => (
        <RepoCard repo={repo} key={repo.id} {...props} />
      ))}
    </ReposContainer>
  );
};

export default Repos;
