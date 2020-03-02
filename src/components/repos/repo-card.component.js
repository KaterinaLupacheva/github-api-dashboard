import React from 'react';
import { RepoCardContainer } from './repo-card.styles';
import { GoStar } from 'react-icons/go';
import { GoRepoForked } from 'react-icons/go';
import { GoPrimitiveDot } from 'react-icons/go';
import { GoCalendar } from 'react-icons/go';

const RepoCard = ({ repo }) => {
  return (
    <RepoCardContainer>
      <div className="name">{repo.name}</div>
      <div className="description">{repo.description}</div>
      <div className="stats-row">
        <div>
          <GoStar />
          {repo.stargazers_count}
        </div>
        <div>
          <GoRepoForked />
          {repo.forks}
        </div>
        <div>
          <GoPrimitiveDot />
          {repo.language}
        </div>
        <div>
          <GoCalendar />
          Created{' '}
          {new Date(repo.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>
      <div>{repo.fork}</div>
      <div>{repo.homepage}</div>
      <div>{repo.open_issues_count}</div>
      {/* <div>{repo.contributors_url}</div> */}
      <div>commits</div>
    </RepoCardContainer>
  );
};

export default RepoCard;
