import React from 'react';
import { ErrorPageContainer } from './error.styles';
import { Link } from 'react-router-dom';

const Error = ({ error }) => {
  console.log(error);
  return (
    <ErrorPageContainer>
      <Link to="/" className="home">
        HOME
      </Link>
      {error && (
        <div className="error">
          {error.status === 403 ? (
            <div>You hit the rate limit. Try again later!</div>
          ) : error.status === 404 ? (
            <div>Something went wrong. Try again later!</div>
          ) : (
            'Error'
          )}
        </div>
      )}
    </ErrorPageContainer>
  );
};

export default Error;
