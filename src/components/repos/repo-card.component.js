import React from 'react';
import { RepoCardContainer, RibbonContainer } from './repo-card.styles';
import { GoStar } from 'react-icons/go';
import { GoRepoForked } from 'react-icons/go';
import { GoPrimitiveDot } from 'react-icons/go';
import { GoCalendar } from 'react-icons/go';
import { GoIssueOpened } from 'react-icons/go';
import { IoIosGlobe } from 'react-icons/io';
import { GoLaw } from 'react-icons/go';
import { GoClock } from 'react-icons/go';

const RepoCard = ({ repo, openRepoCardPage }) => {
  return (
    <RepoCardContainer onClick={() => openRepoCardPage(repo.name)}>
      {repo.fork && (
        <RibbonContainer>
          <span>Forked</span>
        </RibbonContainer>
      )}
      <div className="name">{repo.name}</div>
      <div className="website">
        {repo.homepage && (
          <>
            <IoIosGlobe />
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              Website
            </a>
          </>
        )}
      </div>
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
          {repo.language && (
            <>
              <GoPrimitiveDot />
              {repo.language}
            </>
          )}
        </div>
        <div>
          <GoCalendar />
          {repo.fork ? 'Forked ' : 'Created '}
          {new Date(repo.created_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>
      <div className="stats-row">
        <div>
          <GoIssueOpened />
          Issues {repo.open_issues_count}
        </div>
        <div>
          {repo.license && (
            <div>
              <GoLaw />
              {repo.license.spdx_id}
            </div>
          )}
        </div>
        <div>
          <GoClock />
          Updated{' '}
          {new Date(repo.updated_at).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>
    </RepoCardContainer>
  );
};

export default RepoCard;
