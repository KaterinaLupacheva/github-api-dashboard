import styled from 'styled-components';
import { colors, fontSizes } from '../global.styles';

export const ReposTitle = styled.div`
  color: ${colors.textColor};
  font-size: ${fontSizes.medium};
  font-weight: bold;
  text-transform: uppercase;
  padding: 5vh 0;
`;

export const DropDown = styled.span`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-bottom: 3vh;

  .sorted {
    color: ${colors.textColor};
    font-size: ${fontSizes.medium};
  }

  select {
    background-color: ${colors.secondaryColor};
    color: ${colors.backgroundDark};
    font-size: ${fontSizes.small};
    font-weight: 400;
    padding: 0.5em;
    padding-right: 2.5em;
    border: 0;
    margin: 0;
    border-radius: 3px;
    text-indent: 0.01px;
    text-overflow: '';
    -webkit-appearance: button;
  }
`;
