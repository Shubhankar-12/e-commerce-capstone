import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  addCollectionandDocuments,
  getCollectionandDocuments,
} from "../utils/firebase/firebase.js";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionandDocuments();
      console.log(categoryMap);
    };
    getCategoryMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
