import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinner/Spinner";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import { SubCategoryContainer, CategoryTitle } from "./category.styles";

type CategoryRouteParams = {
  category: string;
};

const Category = () => {
  const { category } = useParams<
    keyof CategoryRouteParams
  >() as CategoryRouteParams;
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    // sub category temporary class
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <SubCategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </SubCategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
