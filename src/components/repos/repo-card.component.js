import React from 'react';
import { RepoCardContainer } from './repo-card.styles';

const RepoCard = ({ repo }) => {
  return (
    <RepoCardContainer>
      <div>{repo.name}</div>
      <div>{repo.description}</div>
      <div>{repo.stargazers_count}</div>
      <div>{repo.forks}</div>
      <div>{repo.language}</div>
    </RepoCardContainer>
  );
};

export default RepoCard;
