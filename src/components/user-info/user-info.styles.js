import styled from 'styled-components';
import { colors, fontSizes } from '../../global.styles';

export const UserInfoContainer = styled.div`
  .user-name {
    color: ${colors.textColor};
    font-size: ${fontSizes.large};
  }

  .avatar {
    border-radius: 100%;
    width: 150px;
    height: 150px;
  }

  .bio {
    padding: 5vh 0;
    color: ${colors.whiteColor};
    font-size: ${fontSizes.small};
  }

  .user-row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 5vh;
    flex-wrap: wrap;

    .item {
      color: ${colors.whiteColor};
      font-size: ${fontSizes.small};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 1vw;
      }
    }
  }

  .user-info-cards {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    color: ${colors.textColor};
    font-size: ${fontSizes.small};
    font-weight: 700;
  }
`;

export const CardButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 5vh;
  width: 20vw;
  height: 15vh;
  border: 1px solid black;
  border-radius: 10px;
  background-color: ${colors.backgroundLightDark};
  cursor: pointer;
  transition: all 0.3s ease;

  &.pressed {
    background-color: ${colors.secondaryColor};
    color: ${colors.backgroundDark};
  }

  &:hover {
    transform: scale(1.1);
  }
`;
