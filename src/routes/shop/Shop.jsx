import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { fetchCategoryStart } from "../../store/categories/category.action";
import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";
import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoryStart());
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
