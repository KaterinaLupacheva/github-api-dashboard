import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const RepoCardContainer = styled.div`
  width: 400px;
  color: ${colors.whiteColor};
  background: ${colors.backgroundLightDark};
  border: 1px solid ${colors.secondaryColor};
  padding: 2vmin;
  margin: 2vmin;

  .name {
    color: ${colors.textColor};
    font-size: ${fontSizes.medium};
    font-weight: 500;
  }

  .description {
    text-align: left;
    padding-top: 2vh;
  }

  .stats-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    svg {
      margin-right: 0.5vw;
      fill: ${colors.textColor};
    }
  }
`;
