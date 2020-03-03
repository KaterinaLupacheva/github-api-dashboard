import React from 'react';
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

const ReposPage = ({ userRepos, reposNum }) => (
  <>
    <ReposTitle>{reposNum.toLocaleString()} total repositories</ReposTitle>
    <Repos data={userRepos} />
  </>
);

export default ReposPage;
