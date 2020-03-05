import React, { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { RepoCardDetailsContainer } from './repo-card-details.styles';
import LineChart from '../charts/line-chart.component';
import { dataForLineChart } from '../../utils/prepareDataForChart';

const RepoCardDetails = ({ goBack, commits }) => {
  return (
    <RepoCardDetailsContainer>
      <div className="arrow-icon" onClick={goBack}>
        <IconContext.Provider value={{ color: 'white', size: '3em' }}>
          <FaArrowLeft />
        </IconContext.Provider>
      </div>
      {commits.length > 0 && <LineChart data={dataForLineChart(commits)} />}
    </RepoCardDetailsContainer>
  );
};

export default RepoCardDetails;
