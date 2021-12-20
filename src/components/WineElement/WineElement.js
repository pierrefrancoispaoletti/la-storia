import { faWineBottle } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  WinePriceContainer,
  WinePriceElement,
} from "../TableauHomePage/tableau-homepage.style";

const WineElement = ({ couleur }) => {
  return (
    <WinePriceContainer>
      {couleur.map(
        (color) =>
          color?.isChecked && (
            <WinePriceElement
              className="price wineprice"
              key={color.value}
              color={color.value}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>
                  <FontAwesomeIcon icon={faWineBottle} size="1x" /> :
                </span>
                <span>{Number(color.price).toFixed(2)} €</span>
              </div>
            </WinePriceElement>
          )
      )}
    </WinePriceContainer>
  );
};

export default WineElement;
