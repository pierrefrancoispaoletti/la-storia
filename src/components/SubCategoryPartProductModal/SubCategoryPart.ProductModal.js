import React from "react";
import FormInput from "../FormInput/FormInput";

const SubCategoryPartProductModal = ({
  setProduct,
  subCategories,
  subCategory,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      {subCategories.map((sub) => (
        <FormInput
          key={sub.slug}
          type="radio"
          name="subCategory"
          checked={subCategory === sub.slug}
          handleChange={handleChange}
          label={sub.name}
          value={sub.slug}
          required
        />
      ))}
    </div>
  );
};

export default SubCategoryPartProductModal;
