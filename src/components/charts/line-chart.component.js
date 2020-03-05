import React from 'react';
import { VictoryLine } from 'victory';
import { colors } from '../../global.styles';

const LineChart = ({ data }) => {
  console.log('LINECHART ' + JSON.stringify(data));
  return (
    <VictoryLine
      data={data}
      //   colorScale="cool"
      //   height={250}
      //   style={{
      //     labels: {
      //       fontSize: '10',
      //       fill: colors.whiteColor,
      //     },
      //   }}
    />
  );
};

export default LineChart;
