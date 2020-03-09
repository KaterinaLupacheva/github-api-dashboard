import React from 'react';
import { RepoCardDetailsContainer } from './repo-card-details.styles';
import LineChart from '../charts/line-chart.component';
import { dataForLineChart } from '../../utils/prepareDataForChart';
import StackChart from '../charts/stack-chart.component';
import { dataForStackChart } from '../../utils/prepareDataForChart';
import Legend from '../charts/legend.component';

const RepoCardDetails = ({ commits, commitsWithContributors, totalCommits, repoName }) => {
  return (
    <RepoCardDetailsContainer>
      <div className="title">
        {repoName} - {totalCommits} total commits
      </div>
      <div className="charts">
        {commits.length > 0 && <LineChart data={dataForLineChart(commits)} />}
        {commitsWithContributors && (
          <>
            <StackChart data={dataForStackChart(commitsWithContributors)} />
            <Legend />
          </>
        )}
      </div>
    </RepoCardDetailsContainer>
  );
};

export default RepoCardDetails;
