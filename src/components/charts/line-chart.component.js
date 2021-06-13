import React from 'react';
import { VictoryLine, VictoryTheme, VictoryChart, VictoryLabel, VictoryAxis } from 'victory';
import { colors } from '../../global.styles';

const LineChart = ({ data }) => {
  return (
    <VictoryChart
      style={{
        parent: {
          border: `1px solid ${colors.whiteColor}`,
          maxWidth: '60%',
          margin: '50px',
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
      <VictoryAxis
        label="Weeks"
        tickFormat={(tick, i) => (i % 10 === 0 ? `${tick}` : '')}
        style={{
          axis: { stroke: `${colors.secondaryColor}` },
          axisLabel: { fontSize: 20, padding: 30, stroke: `${colors.textColor}` },
          tickLabels: { stroke: `${colors.whiteColor}`, angle: -60, fontSize: 7 },
        }}
      />
      <VictoryAxis
        dependentAxis
        label="Commits"
        style={{
          axis: { stroke: `${colors.secondaryColor}` },
          axisLabel: { fontSize: 20, padding: 30, stroke: `${colors.textColor}` },
          tickLabels: { stroke: `${colors.whiteColor}` },
        }}
      />
    </VictoryChart>
  );
};

export default LineChart;
