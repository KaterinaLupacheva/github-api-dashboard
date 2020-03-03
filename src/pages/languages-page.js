import React from 'react';
import PieChart from '../components/charts/pie-chart.component';
import { dataForPieChart } from '../utils/prepareDataForChart';
import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

const TotalLanguages = styled.div`
  padding: 10vh 0 5vh 0;
  color: ${colors.textColor};
  font-size: ${fontSizes.medium};
`;

const languagesStructure = languages => {};

const LanguagesPage = ({ languages }) => (
  <>
    <TotalLanguages>{Object.keys(languages).length} total languages used</TotalLanguages>
    <PieChart data={dataForPieChart(languages)} />
  </>
);

export default LanguagesPage;
