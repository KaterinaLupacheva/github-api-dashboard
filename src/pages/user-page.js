import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import UserInfo from '../components/user-info/user-info.component';
import RateLimit from '../components/rate-limit/rate-limit.component';
import PieChart from '../components/charts/pie-chart.component';
import { fetchData, fetchAllLanguages } from '../utils/fetchData';
import { dataForPieChart } from '../utils/prepareDataForChart';

const UserPage = props => {
  const [error, setIsError] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [languages, setLanguages] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);
  const [languagesIsPressed, toggleLanguagesIsPressed] = useState(true);
  const location = useLocation();
  const user = location.state.user;

  useEffect(() => {
    const getData = async () => {
      try {
        //fetch number of requests left
        const rateLimit = await fetchData(`https://api.github.com/rate_limit`);
        setRateLimit(rateLimit.resources.core);
        if (rateLimit.resources.core.remaining < 1) {
          setIsError(true);
        }
        //fetch user info
        const userInfo = await fetchData(`https://api.github.com/users/${user}`);
        setUserInfo(userInfo);
        //fetch user's repos
        const repos = await fetchData(`https://api.github.com/users/${user}/repos`);
        //fetch languages of all repos
        const lan = await fetchAllLanguages(repos, user);
        setLanguages(lan);
      } catch (error) {
        setIsError(true);
      }
    };
    getData();
  }, [user]);

  return (
    <div>
      {error ? (
        <div>{'ERROR'}</div>
      ) : (
        <>
          {rateLimit && <RateLimit rateLimit={rateLimit} />}
          {(userInfo || languages) && (
            <UserInfo
              userInfo={userInfo}
              languages={languages}
              languagesIsPressed={languagesIsPressed}
              toggleLanguagesIsPressed={() => toggleLanguagesIsPressed(!languagesIsPressed)}
            />
          )}
          {languages && <PieChart data={dataForPieChart(languages)} />}
        </>
      )}
    </div>
  );
};

export default UserPage;
