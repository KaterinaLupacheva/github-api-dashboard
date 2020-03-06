import React from 'react';
import {
  VictoryStack,
  VictoryTheme,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryArea,
} from 'victory';
import { colors } from '../../global.styles';

const StackChart = ({ data }) => {
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
        text="Commits by owner and contributors"
        x={225}
        y={30}
        textAnchor="middle"
        style={{ fill: 'white', fontSize: '20px' }}
      />
      <VictoryStack
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
        colorScale="warm"
      >
        <VictoryArea data={data[0]} />
        <VictoryArea data={data[1]} />
      </VictoryStack>
      <VictoryAxis
        label="Weeks"
        style={{
          axis: { stroke: `${colors.secondaryColor}` },
          axisLabel: { fontSize: 20, padding: 30, stroke: `${colors.textColor}` },
          tickLabels: { stroke: `${colors.whiteColor}` },
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

export default StackChart;
