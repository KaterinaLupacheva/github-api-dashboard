import React from 'react';
import { VictoryPie } from 'victory';
import { colors } from '../../global.styles';

const PieChart = ({ data }) => {
  return (
    <VictoryPie
      data={data}
      colorScale="cool"
      height={200}
      style={{
        labels: {
          fontSize: '8',
          fill: colors.whiteColor,
        },
      }}
    />
  );
};

export default PieChart;
