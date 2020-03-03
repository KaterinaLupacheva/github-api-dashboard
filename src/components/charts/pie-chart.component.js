import React from 'react';
import { VictoryPie } from 'victory';
import { colors } from '../../global.styles';

const PieChart = ({ data }) => {
  return (
    <VictoryPie
      data={data}
      colorScale="cool"
      height={250}
      style={{
        labels: {
          fontSize: '10',
          fill: colors.whiteColor,
        },
      }}
    />
  );
};

export default PieChart;
