import React from 'react';
import { VictoryPie } from 'victory';

const PieChart = ({ data }) => {
  return <VictoryPie data={data} />;
};

export default PieChart;
