import React from "react";
import { findSubCategoryName } from "../../redux/reducers/Products/utils";
import LoaderElement from "../Loader/LoaderElement";
import ProductElement from "../ProductElement/ProductElement";
import TableauHomePage from "../TableauHomePage/TableauHomePage";
const ProductOverview = ({ loading, products, setFilter, filter }) => {
  return (
    <TableauHomePage setFilter={setFilter} filter={filter}>
      {loading ? (
        <LoaderElement />
      ) : (
        products?.map((product) => {
          return (
            <div key={product._id} style={{ width: "100%" }}>
              {product?.subCategory && findSubCategoryName(product)}
              <ProductElement product={product} />
            </div>
          );
        })
      )}
    </TableauHomePage>
  );
};

export default ProductOverview;
