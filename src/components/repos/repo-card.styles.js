import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const RepoCardContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: ${colors.whiteColor};
  background: ${colors.backgroundLightDark};
  border: 1px solid ${colors.secondaryColor};
  padding: 2vmin;
  margin: 2vmin;
  position: relative;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: ${colors.backgroundDark};
  }

  .name {
    color: ${colors.textColor};
    font-size: ${fontSizes.medium};
    font-weight: 500;
  }

  .website {
    padding: 2vmin;

    svg {
      margin-right: 0.5vw;
    }

    a {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .description {
    text-align: left;
    padding: 2vmin;
  }

  .stats-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    padding: 2vmin 0;

    svg {
      margin-right: 0.5vw;
      fill: ${colors.textColor};
    }
  }
`;

export const RibbonContainer = styled.div`
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
  overflow: hidden;
  width: 75px;
  height: 75px;
  text-align: right;

  span {
    font-size: 10px;
    font-weight: bold;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    line-height: 20px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 100px;
    display: block;
    background: #79a70a;
    background: linear-gradient(#f79e05 0%, #8f5408 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    position: absolute;
    top: 19px;
    right: -21px;
  }

  span::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid #8f5408;
    border-right: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #8f5408;
  }

  span::after {
    content: '';
    position: absolute;
    right: 0px;
    top: 100%;
    z-index: -1;
    border-left: 3px solid transparent;
    border-right: 3px solid #8f5408;
    border-bottom: 3px solid transparent;
    border-top: 3px solid #8f5408;
  }
`;
