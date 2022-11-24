import { createContext, useEffect, useState } from "react";
import { getCollectionandDocuments } from "../utils/firebase/firebase.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryMap = await getCollectionandDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoryMap();
  }, []);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
