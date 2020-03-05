import React, { useState, useEffect } from 'react';
import Repos from '../components/repos/repos.component';
import RepoCardDetails from '../components/repo-card-details/repo-card-details.component';
import { ReposTitle, DropDown } from './repos-page.styles';
import { fetchData } from '../utils/fetchData';

const ReposPage = props => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState('stars');
  const [repoCardIsOpened, setRepocardIsOpened] = useState(false);
  const [commits, setCommits] = useState([]);

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
          [...props.userRepos].sort(
            (a, b) => Date.parse(b[sortProperty]) - Date.parse(a[sortProperty])
          )
        );
      } else {
        setData([...props.userRepos].sort((a, b) => b[sortProperty] - a[sortProperty]));
      }
    };

    sortRepos(sortType);
  }, [sortType, props.userRepos]);

  const handleOpenRepoCard = async repoName => {
    setRepocardIsOpened(true);
    const yearCommits = await fetchData(
      `https://api.github.com/repos/${props.user}/${repoName}/stats/commit_activity`
    );
    setCommits(yearCommits);
  };

  const goBack = () => {
    setRepocardIsOpened(false);
    setCommits([]);
  };

  return (
    <>
      {repoCardIsOpened && commits.length > 0 ? (
        <RepoCardDetails goBack={goBack} commits={commits} />
      ) : (
        <>
          <ReposTitle>{props.reposNum.toLocaleString()} total repositories</ReposTitle>
          <DropDown>
            <span className="sorted">{'Sort by '}</span>
            <select onChange={e => setSortType(e.target.value)}>
              <option value="stars">Stars</option>
              <option value="forks">Forks</option>
              <option value="upd">Updated</option>
            </select>
          </DropDown>
          {data && <Repos data={data} {...props} openRepoCardPage={handleOpenRepoCard} />}
        </>
      )}
    </>
  );
};

export default ReposPage;
