import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { RepoCardDetailsContainer } from './repo-card-details.styles';
import LineChart from '../charts/line-chart.component';
import { dataForLineChart } from '../../utils/prepareDataForChart';
import StackChart from '../charts/stack-chart.component';
import { dataForStackChart } from '../../utils/prepareDataForChart';
import Legend from '../charts/legend.component';

const RepoCardDetails = ({ goBack, commits, commitsWithContributors, totalCommits }) => {
  return (
    <RepoCardDetailsContainer>
      <div className="arrow-icon" onClick={goBack}>
        <IconContext.Provider value={{ color: 'white', size: '3em' }}>
          <FaArrowLeft />
        </IconContext.Provider>
      </div>
      <div className="title">{totalCommits} total commits</div>
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
