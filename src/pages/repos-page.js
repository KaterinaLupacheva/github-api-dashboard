import React, { useState, useEffect } from 'react';
import Repos from '../components/repos/repos.component';
import { ReposTitle, DropDown } from './repos-page.styles';

const ReposPage = ({ userRepos, reposNum }) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('stars');

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
          [...userRepos].sort((a, b) => Date.parse(b[sortProperty]) - Date.parse(a[sortProperty]))
        );
      } else {
        setData([...userRepos].sort((a, b) => b[sortProperty] - a[sortProperty]));
      }
    };

    sortRepos(sortType);
  }, [sortType, userRepos]);

  return (
    <>
      <ReposTitle>{reposNum.toLocaleString()} total repositories</ReposTitle>
      <DropDown>
        <span className="sorted">{'Sort by '}</span>
        <select onChange={e => setSortType(e.target.value)}>
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="upd">Updated</option>
        </select>
      </DropDown>
      {data && <Repos data={data} />}
    </>
  );
};

export default ReposPage;
