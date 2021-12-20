import { createSelector } from "reselect";

const cafeOrders = {
  "sapore-di-mare": 0,
  moules: 1,
  aperitifs: 2,
  digestifs: 3,
  eaux: 4,
  softs: 5,
  bieres: 6,
  "boissons-chaudes": 7,
};

const compare = (a, b) => {
  if (a === b) return 0;
  return a < b ? -1 : 1;
};
const selectProducts = (state) => state.products;

export const selectProductsByCategory = (category) =>
  createSelector([selectProducts], ({ products }) =>
    products.filter((product) => product.category === category)
  );

export const selectModalType = createSelector(
  [selectProducts],
  ({ modalType }) => modalType
);

export const selectProductToEdit = createSelector(
  [selectProducts],
  ({ productToEdit }) => productToEdit
);

export const selectProductsBySubCategory = (filter, category) =>
  createSelector([selectProductsByCategory(category)], (products) =>
    products && filter
      ? products.filter((product) =>
          product.subCategory ? product.subCategory === filter : product
        )
      : products?.sort((a, b) => {
          const index_result = compare(
            cafeOrders[a?.subCategory],
            cafeOrders[b?.subCategory]
          );

          if (index_result === 0) {
            return compare(a.price, b.price);
          }

          return index_result;
        })
  );
