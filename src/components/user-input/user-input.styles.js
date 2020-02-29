import styled from 'styled-components';
import { colors } from '../../global.styles';

export const UserInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  .user-input-label {
    color: ${colors.textColor};
    font-size: 5vh;
  }

  .user-input {
    width: 50vw;
    height: 8vh;
    margin: 5vh;
    background-color: ${colors.backgroundLightDark};
    border: 1px solid black;
    border-radius: 5px;
    font-size: 5vh;
    color: ${colors.whiteColor};
    font-weight: 400;
  }

  .user-input-button {
    background-color: ${colors.backgroundLightDark};
    height: 8vh;
    font-size: 5vh;
    color: ${colors.textColor};
    border-color: ${colors.backgroundDark};
    font-weight: 400;
    cursor: pointer;
    border-radius: 10px;
    width: 20vw;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
  }
`;
