import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { FooterContainer } from './footer.styles';

const Footer = () => (
  <FooterContainer>
    <div className="developed">
      {`Developed by `}
      <a href="https://ramonak.io" target="_blank" rel="noopener noreferrer">
        {`Katsiaryna (Kate) Lupachova`}
      </a>
    </div>
    <div className="source">
      <a
        href="https://github.com/KaterinaLupacheva/github-api-dashboard"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoMarkGithub />
        {`Source `}
      </a>
    </div>
  </FooterContainer>
);

export default Footer;
