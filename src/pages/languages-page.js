import React, { useEffect, useState } from 'react';
import PieChart from '../components/charts/pie-chart.component';
import { dataForPieChart } from '../utils/prepareDataForChart';
import LanguagesTable from '../components/table/languages-table.component';
import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

const TotalLanguages = styled.div`
  padding: 10vh 0 5vh 0;
  color: ${colors.textColor};
  font-size: ${fontSizes.medium};
`;

const LanguagesPage = ({ languages }) => {
  const [structure, setStructure] = useState([]);

  useEffect(() => {
    const languagesStructure = languages => {
      const result = [];
      const totalSum = Object.values(languages).reduce((a, b) => a + b, 0);
      for (let [key, value] of Object.entries(languages)) {
        const share = Math.round((value / totalSum) * 100);
        result.push({ key, share });
      }
      setStructure(result);
    };

    languagesStructure(languages);
  }, []);

  return (
    <>
      <TotalLanguages>{Object.keys(languages).length} total languages used</TotalLanguages>
      <PieChart data={dataForPieChart(languages)} />
      <LanguagesTable data={structure} />
    </>
  );
};

export default LanguagesPage;
