import React, { useEffect, useState } from 'react';
import FollowerInfo from './follower-info.component';
import { fetchData } from '../../utils/fetchData';

const Followers = ({ user, setError }) => {
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const getFollowers = async () => {
      try {
        const result = await fetchData(`https://api.github.com/users/${user}/followers`);
        console.log(result);
        setFollowers(result);
      } catch (error) {
        setError();
      }
    };

    getFollowers();
  }, [user]);

  return (
    <div style={{ color: 'white' }}>
      FOLLOWERS
      {followers && followers.map(f => <FollowerInfo follower={f} key={f.id} />)}
    </div>
  );
};

export default Followers;
