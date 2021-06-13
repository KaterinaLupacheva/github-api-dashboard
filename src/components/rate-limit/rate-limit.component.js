import React from 'react';

const RateLimit = ({ rateLimit }) => {
  const time = new Date(rateLimit.reset * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
  return (
    <div style={{ color: 'white' }}>
      {`${rateLimit.remaining} / ${rateLimit.limit} requests remain until ${time}`}
    </div>
  );
};

export default RateLimit;
