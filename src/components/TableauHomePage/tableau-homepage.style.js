import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { colors } from "../../_const";

const isIlly = (props) => {
  if (props.illy) {
    return css`
      div:not(.modal) {
        background: ${colors.main};
        position: relative;
        color: black;
        font-family: unset;
        .subcategory {
          color: ${colors.secondary};
          font-family: unset;
        }
        .chevron {
          color: ${colors.secondary};
          border: 1px solid ${colors.secondary};
          animation: scalingChevronIlly 1.5s infinite linear alternate;
          @keyframes scalingChevronIlly {
            0% {
              background: inherit;
              transform: scale(1);
            }
            100% {
              background: ${colors.secondary};
              color: ${colors.main};
              transform: scale(1.2);
            }
          }
        }
        & > .loader > span {
          color: ${colors.secondary};
        }
        & > .title {
          color: ${colors.secondary};
          font-family: unset;
          font-weight: 300;
          font-size: 1.2rem;
          margin: 12px auto;
          & > .price {
            color: black;
            font-family: unset;
            border-bottom: 1px solid ${colors.secondary};
            font-size: 1rem;
            font-style: italic;
          }
        }
        & > .description {
          text-align: center;
          font-weight: 300;
          @media (min-width: 420px) {
            text-align: left;
          }
        }
        & > .menu {
          color: ${colors.secondary};
          border: 1px solid ${colors.secondary};
          :not(:first-child) span {
            margin-right: 3px;
          }
        }
        & > .selected {
          background: ${colors.secondary};
          color: ${colors.main};
        }
      }
      h2 {
        color: ${colors.secondary};
        font-family: unset;
        font-weight: 200;
      }
    `;
  }
};

const contentVisible = (props) => {
  if (!props.visible)
    return css`
      display: none;
    `;
};

const playAnimation = (props) => {
  if (props.transition) {
    return "runing";
  }
};

const getTransitionType = (props) => {
  //blur pour une transition blur,
  //scale pour un zoom
  switch (props.transitionType) {
    case "blur":
      return css`
        animation: blurArray 0.5s ease-in-out ${playAnimation};
        @keyframes blurArray {
          0% {
            filter: blur(10px);
          }
          100% {
            filter: blur(0);
          }
        }
      `;
    case "scale":
      return css`
        animation: scaleArray 0.2s ease ${playAnimation};
        @keyframes scaleArray {
          0% {
            transform: scale(100%);
          }
          100% {
            transform: scale(0%);
          }
        }
      `;
    case "scale reverse":
      return css`
        animation: scaleArray 1.5s linear ${playAnimation} reverse;
        @keyframes scaleArray {
          0% {
            transform: scale(100%);
          }
          50% {
            transform: scale(50%);
          }
          75% {
            transform: scale(25%);
          }
          100% {
            transform: scale(0%);
          }
        }
      `;

    default:
      break;
  }
};

const getWineColor = (props) => {
  switch (props.color) {
    case "rouge":
      return css`
        color: #742f37;
      `;
    case "blanc":
      return css`
        color: #f1f285;
      `;
    case "rosé":
      return css`
        color: #ffb9b9;
      `;
    default:
      break;
  }
};

export const TableauContainer = styled.div`
  border: ${(props) =>
    props.illy ? `14px solid ${colors.secondary}` : "14px solid #deb887"};
  margin: 0px 8px;
  box-shadow: 0px 9px 23px -5px rgba(0, 0, 0, 0.58);
  perspective: 1500px;
  background: #484b56;
  .subcategory {
    margin-top: 12px;
    text-align: center;
    display: block;
    font-size: 2.2em;
    color: ${colors.main};
    font-family: "crayonHand";
    text-transform: uppercase;
    font-weight: 200;
  }
  ${isIlly}
`;

export const TableauWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #484b56;
  min-height: 80vh;
  ${getTransitionType}
  ${isIlly}
`;

export const TableauTitle = styled.h2`
  position: relative;
  font-family: "crayonHand";
  font-size: 2.6em;
  margin-bottom: 12px;
  color: ${colors.main};
  text-align: center;
  letter-spacing: 10px;
  overflow-wrap: anywhere;
  @media (max-width: 379px) {
    font-size: 1.9em;
  }
`;

export const TableauLegend = styled.p`
  margin: 8px 12px;
  text-align: center;
  line-height: 1.6;
  color: ${colors.secondary};
`;

export const TableauContent = styled.div`
  position: relative;
  font-family: "crayonHand";
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: flex-start;
  line-height: 36px;
  color: ${colors.main};
  margin: auto;
  text-align: center;
  font-size: 1.8rem;
  @media (max-width: 420px) {
    align-items: center;
  }
  ${contentVisible}

  .title {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    color: ${colors.main};
    letter-spacing: 2px;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-size: 1.2rem;
    margin: 12px auto;
    & > span {
      max-width: 50%;
      text-align: left;
    }
    @media (max-width: 420px) {
      & > span {
        max-width: 100%;
        text-align: center;
      }
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .price {
    font-family: "ChalkAboutItalic";
    font-weight: 400;
    :not(.wineprice) {
      border-bottom: 1px solid ${colors.main};
    }
    font-size: 1.1rem;
    @media (max-width: 370px) {
      font-size: 1.5rem;
    }
  }

  .description {
    text-align: center;
    margin: 0;
    font-size: 1.3rem;
  }

  .wine-color {
    font-size: 1.5em;
    ${getWineColor}
  }
`;

export const WineColorContainer = styled.div``;

export const WinePriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  justify-content: center;
  vertical-align: baseline;
`;

export const WinePriceElement = styled.span`
  background-color: #565a68;
  margin-bottom: 8px;
  width: 100%;
  ${getWineColor};
`;

export const WineItemElement = styled.span`
  padding: 6px 8px;
  border: 3px solid ${colors.main};
  border-radius: 50px;
  display: inline-block;
  margin-right: 1em;
  background: grey;
  font-size: 0.7em;
  :active {
    background: ${colors.main};
    border: 3px solid black;
  }
  ${getWineColor}
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 420px) {
    margin-right: 0;
  }
`;

export const SubCategoryFilterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  color: ${colors.main};
  font-family: "crayonHand";
  font-size: 1em;
  transition: all 0.5s ease;
  margin: 8px auto;

  @keyframes appearSubCategory {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  &.isOpen {
    .menu:not(:first-child) {
      display: flex;
      animation: appearSubCategory 0.1s ease-in-out alternate;
    }
  }
  &.isClosed {
    .menu:not(:first-child) {
      display: none;
    }
  }

  .selected {
    z-index: 10;
    text-decoration: underline 2px;
    background: ${colors.main};
    color: #484b56;
    transition: all 0.5s ease-in-out;
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    animation: moveAndScale 0.2s ease-in-out;
    @keyframes moveAndScale {
      0% {
        transform: translateY(0px) scale(1);
      }
      50% {
        transform: translateY(-10px) scale(1.1);
      }
      75% {
        transform: translateY(10px) scale(1.2);
      }
      100% {
        transform: translateY(0px) scale(1.1);
      }
    }
    @-webkit-keyframes moveAndScale {
      0% {
        -webkit-transform: translateY(0px) scale(1);
      }
      50% {
        -webkit-transform: translateY(-10px) scale(1.1);
      }
      75% {
        -webkit-transform: translateY(10px) scale(1.2);
      }
      100% {
        -webkit-transform: translateY(0px) scale(1.1);
      }
    }
  }
  .menu {
    width: calc(100% - 30%);
    margin: 3px 6px;
    cursor: pointer;
    align-self: center;
    vertical-align: bottom;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors.main};
    border-radius: 50px;
    padding: 5px;
  }
`;

export const OpenSubMenuChevron = styled(FontAwesomeIcon)`
  margin-top: 6px;
  color: ${colors.main};
  border: 1px solid ${colors.main};
  padding: 5px 7px;
  border-radius: 50px;
  animation: scalingChevron 1.5s infinite linear alternate;
  @keyframes scalingChevron {
    0% {
      background: inherit;
      transform: scale(1);
    }
    100% {
      background: ${colors.main};
      color: #484b56;

      transform: scale(1.2);
    }
  }
`;
