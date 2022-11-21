import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionandDocuments } from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    addCollectionandDocuments("categories", SHOP_DATA);
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
