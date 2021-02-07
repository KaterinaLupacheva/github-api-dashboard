import React, { useEffect, useState } from 'react';
import { ErrorPageContainer } from './error.styles';
import { Link } from 'react-router-dom';

const Error = ({ error, rateLimit, mockdata }) => {
  const [minutes, setMinutes] = useState(null);

  useEffect(() => {
    const calculateMinutes = () => {
      const resetDate = new Date(rateLimit.reset * 1000);
      const now = new Date();
      const diff = resetDate - now;
      const mins = Math.floor(diff / 1000 / 60);
      setMinutes(mins);
    };

    if (error.status === 403) {
      calculateMinutes();
    }
  }, [error.status, rateLimit]);

  return (
    <ErrorPageContainer>
      <Link to="/" className="home">
        HOME
      </Link>
      {error && (
        <div className="error">
          {error.status === 403 ? (
            <>
              <span>
                {`You hit the `}
                <a
                  href="https://developer.github.com/v3/#rate-limiting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {` rate limit`}
                </a>
                {`. Try again in ${minutes} minutes! Or `}
                <span className="demo-version" onClick={mockdata}>{`view demo version`}</span>
                {` with a mock data.`}
              </span>
            </>
          ) : error.status === 404 ? (
            <div>{`Something went wrong. Try again later!`}</div>
          ) : (
            'Error'
          )}
        </div>
      )}
    </ErrorPageContainer>
  );
};

export default Error;
