import React from 'react';
import { FollowerInfoContainer } from './follower-info.styles';

const FollowerInfo = ({ follower }) => {
  return (
    <FollowerInfoContainer>
      <img className="avatar" src={follower.avatar_url} alt="follower-avatar" />
      <h2>
        <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
          @{follower.login}
        </a>
      </h2>
    </FollowerInfoContainer>
  );
};

export default FollowerInfo;
