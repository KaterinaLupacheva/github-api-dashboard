import React from 'react';
import { VictoryLine, VictoryTheme, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';
import { colors } from '../../global.styles';

const LineChart = ({ data }) => {
  return (
    <VictoryChart
      style={{
        parent: {
          border: `1px solid ${colors.whiteColor}`,
          maxWidth: '50%',
          marginLeft: '50px',
        },
      }}
    >
      <VictoryLabel
        text="Commits per week"
        x={225}
        y={30}
        textAnchor="middle"
        style={{ fill: 'white', fontSize: '20px' }}
      />
      <VictoryLine
        data={data}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        theme={VictoryTheme.material}
        style={{
          data: { stroke: '#c43a31' },
        }}
      />
    </VictoryChart>
  );
};

export default LineChart;
