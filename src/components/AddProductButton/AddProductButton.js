import React from "react";
import { AddProductButtonStyled } from "./add-product-button.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/pro-light-svg-icons";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/reducers/Products/actions";

const AddProductButton = () => {
  const dispatch = useDispatch();
  return (
    <AddProductButtonStyled
      type="button"
      onClick={() => dispatch(toggleModal("ajouter"))}
    >
      <FontAwesomeIcon icon={faPlus} size="2x" />
    </AddProductButtonStyled>
  );
};

export default AddProductButton;
