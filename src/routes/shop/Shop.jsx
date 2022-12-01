import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { setCategories } from "../../store/categories/category.action";
import { getCollectionandDocuments } from "../../utils/firebase/firebase";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoriesArray = await getCollectionandDocuments();
      console.log(categoriesArray);
      dispatch(setCategories(categoriesArray));
    };
    getCategoryMap();
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* : for route parameter */}
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
