import React, { useEffect, useState } from 'react';
import { fetchAllLanguages } from '../utils/fetchData';
import PieChart from '../components/charts/pie-chart.component';
import { dataForPieChart } from '../utils/prepareDataForChart';
import LanguagesTable from '../components/table/languages-table.component';
import { TotalLanguages, DataRow } from './languages-page.styles';
import { mockLanguages } from '../utils/mockdata';

const LanguagesPage = ({ user, repos, useMockData }) => {
  const [languages, setLanguages] = useState(null);
  const [structure, setStructure] = useState([]);

  useEffect(() => {
    const languagesStructure = languages => {
      const result = [];
      const totalSum = Object.values(languages).reduce((a, b) => a + b, 0);
      for (let [key, value] of Object.entries(languages)) {
        const share = Math.round((value / totalSum) * 100);
        result.push({ key, share });
      }
      result.sort((a, b) => b.share - a.share);
      setStructure(result);
    };

    const fetchLanguages = async () => {
      //fetch languages of all repos
      const lan = await fetchAllLanguages(repos, user);
      setLanguages(lan);
      languagesStructure(lan);
    };

    if (!useMockData) {
      fetchLanguages();
    } else {
      setLanguages(mockLanguages);
      languagesStructure(mockLanguages);
    }
  }, [languages, repos, useMockData, user]);

  return (
    <>
      {languages && (
        <>
          <TotalLanguages>{Object.keys(languages).length} total languages used</TotalLanguages>
          <DataRow>
            <PieChart data={dataForPieChart(languages)} />
            <LanguagesTable data={structure} />
          </DataRow>
        </>
      )}
    </>
  );
};

export default LanguagesPage;
