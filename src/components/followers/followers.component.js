import React, { useEffect, useState } from 'react';
import FollowerInfo from './follower-info.component';
import { fetchData } from '../../utils/fetchData';
import { FollowersContainer } from './followers.styles';

const Followers = ({ user, setError }) => {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const result = await fetchData(`https://api.github.com/users/${user}/followers`);
        setFollowers(result);
      } catch (error) {
        setError();
      }
    };

    getFollowers();
  }, [user]);

  return (
    <FollowersContainer>
      <div className="title">{'followers'}</div>
      {followers && followers.map(f => <FollowerInfo follower={f} key={f.id} />)}
    </FollowersContainer>
  );
};

export default Followers;
