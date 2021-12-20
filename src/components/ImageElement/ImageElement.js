import React from "react";
import logo from "../../assets/images/logo.png";
import { placeLocation } from "../../_const";

const ImageElement = ({ width }) => {
  return <img width={width} src={logo} alt={`logo ${placeLocation}`} />;
};

export default ImageElement;
