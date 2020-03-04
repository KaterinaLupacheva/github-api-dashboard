import React, { useState, useEffect } from 'react';
import Repos from '../components/repos/repos.component';
import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

const ReposTitle = styled.div`
  color: ${colors.textColor};
  font-size: ${fontSizes.medium};
  font-weight: bold;
  text-transform: uppercase;
  padding: 5vh 0;
`;

const Hidden = styled.div`
  color: ${colors.backgroundDark};
`;

const ReposPage = ({ userRepos, reposNum }) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [test, setTest] = useState('Test');

  useEffect(() => {
    const sortRepos = type => {
      const types = {
        stars: 'stargazers_count',
        forks: 'forks_count',
        upd: 'updated_at',
      };
      const sortProperty = types[type];
      if (type === 'upd') {
        setData(
          userRepos.sort((a, b) => Date.parse(b[sortProperty]) - Date.parse(a[sortProperty]))
        );
      } else {
        setData(userRepos.sort((a, b) => b[sortProperty] - a[sortProperty]));
      }
      setTest(type);
    };

    sortRepos(sortType);
  }, [sortType]);

  return (
    <>
      <ReposTitle>{reposNum.toLocaleString()} total repositories</ReposTitle>

      <select onChange={e => setSortType(e.target.value)}>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="upd">Updated</option>
      </select>
      {data && <Repos data={data} />}
      <Hidden>{test}</Hidden>
    </>
  );
};

export default ReposPage;
