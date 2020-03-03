import React from 'react';
import Followers from '../components/followers/followers.component';
import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

const FollowersTitle = styled.div`
  color: ${colors.textColor};
  font-size: ${fontSizes.medium};
  font-weight: bold;
  text-transform: uppercase;
  padding: 5vh 0;
`;

const FollowersPage = ({ user, setError, followersNum }) => (
  <>
    <FollowersTitle>{followersNum.toLocaleString()} total followers</FollowersTitle>
    <Followers user={user} setError={setError} />
  </>
);

export default FollowersPage;
