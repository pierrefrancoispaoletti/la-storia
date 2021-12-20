import React from "react";
import { Link } from "react-router-dom";
import ImageElement from "../ImageElement/ImageElement";
import Loginbutton from "../LoginButton/LoginButton";
import { HeaderContainer } from "./header.style";

const Header = ({ shop }) => {
  return (
    <HeaderContainer>
      <Link to="/">
        <ImageElement width="100px" />
      </Link>
      <Loginbutton />
    </HeaderContainer>
  );
};

export default Header;
