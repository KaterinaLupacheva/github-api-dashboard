import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const RepoCardDetailsContainer = styled.div`
  .arrow-icon {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-left: 4vw;
  }

  .title {
    color: ${colors.textColor};
    font-size: ${fontSizes.medium};
    font-weight: bold;
    text-transform: uppercase;
    padding: 5vh 0;
  }

  .charts {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
