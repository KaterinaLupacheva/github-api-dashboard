import React from 'react';
import {
  VictoryStack,
  VictoryTheme,
  VictoryChart,
  VictoryLabel,
  VictoryAxis,
  VictoryArea,
  VictoryLegend,
} from 'victory';
import { colors } from '../../global.styles';

const StackChart = ({ data }) => {
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
        text="Commits by owner and contributors"
        x={225}
        y={30}
        textAnchor="middle"
        style={{ fill: `${colors.whiteColor}`, fontSize: '20px' }}
      />
      <VictoryLegend
        x={125}
        y={50}
        title="Legend"
        centerTitle
        orientation="horizontal"
        gutter={20}
        style={{
          border: { stroke: `${colors.secondaryColor}` },
          title: { fontSize: 20, fill: `${colors.whiteColor}` },
          labels: { fill: `${colors.whiteColor}` },
        }}
        data={[
          { name: 'By owner', symbol: { fill: `${colors.textColor}` } },
          { name: 'By contributors', symbol: { fill: `${colors.backgroundLightDark}` } },
        ]}
      />
      <VictoryStack
        animate={{
          duration: 1000,
          onLoad: { duration: 500 },
        }}
        colorScale="warm"
      >
        <VictoryArea
          data={data[0]}
          style={{
            data: { fill: `${colors.textColor}` },
          }}
        />
        <VictoryArea
          data={data[1]}
          style={{
            data: { fill: `${colors.backgroundLightDark}` },
          }}
        />
      </VictoryStack>
      <VictoryAxis
        tickFormat={tick => ''}
        style={{
          axis: { stroke: `${colors.secondaryColor}` },
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={tick => ''}
        style={{
          axis: { stroke: `${colors.secondaryColor}` },
        }}
      />
    </VictoryChart>
  );
};

export default StackChart;
